"""
pcfix TikTok Video Vision & Diagnostic Ingestion Script
Uses yt-dlp to download clean watermark-free video and Google GenAI (Gemini 2.0 Flash)
to watch, listen, and understand the video content.
"""

import argparse
import os
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables (.env)
load_dotenv()

def ensure_api_key():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not found in environment or .env file.", file=sys.stderr)
        sys.exit(1)
    return api_key

def download_tiktok_video(url: str, output_path: str) -> bool:
    print(f"[*] Downloading clean video from: {url}")
    cmd = [
        sys.executable,
        "-m", "yt_dlp",
        "--no-warnings",
        "--no-playlist",
        # Force AVC/H.264 video codec so Gemini can decode it cleanly
        "-f", "bestvideo[vcodec^=avc1]+bestaudio/best[vcodec^=avc1]/best",
        "-o", output_path,
        url
    ]
    try:
        subprocess.run(cmd, check=True)
        return True
    except subprocess.CalledProcessError as err:
        print(f"Error during video download: {err}", file=sys.stderr)
        return False

def analyze_video(video_path: str, user_prompt: str = ""):
    from google import genai
    from google.genai import types

    api_key = ensure_api_key()
    client = genai.Client(api_key=api_key)

    print(f"[*] Uploading {video_path} to Gemini Files API...")
    video_file = client.files.upload(file=video_path)
    print(f"[*] File uploaded: {video_file.name}. Waiting for processing...")

    # Wait for file to transition to ACTIVE state
    while video_file.state.name == "PROCESSING":
        time.sleep(2)
        video_file = client.files.get(name=video_file.name)

    if video_file.state.name == "FAILED":
        raise ValueError(f"Video processing failed in Gemini API: {video_file.error.message}")

    print("[*] Video is ready for analysis. Sending vision prompt...")

    default_prompt = (
        "You are an expert video analyst. Watch and listen to this TikTok video closely.\n"
        "Provide a structured breakdown:\n"
        "1. Video Summary: Brief overview of what this video is about.\n"
        "2. Visual Actions: Key visual scenes, actions, and objects shown.\n"
        "3. On-Screen Text & Captions: Any text overlays, stickers, or titles visible in the video.\n"
        "4. Spoken Audio: Key spoken points and instructions.\n"
        "5. Chronological Timeline: Second-by-second breakdown of events with timestamps.\n"
        "Do NOT use any em dashes or circle dots in your response."
    )

    prompt = user_prompt.strip() if user_prompt else default_prompt

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[video_file, prompt],
        config=types.GenerateContentConfig(
            temperature=0.2,
        )
    )

    # Cleanup remote file
    try:
        client.files.delete(name=video_file.name)
    except Exception:
        pass

    return response.text

def main():
    parser = argparse.ArgumentParser(description="Watch and analyze any TikTok video using Gemini 2.0 Flash.")
    parser.add_argument("url", help="TikTok video URL (e.g. https://www.tiktok.com/@user/video/12345 or https://vt.tiktok.com/ZSxxx/)")
    parser.add_argument("--prompt", "-p", default="", help="Custom prompt / question to ask the AI about the video")
    parser.add_argument("--keep", "-k", action="store_true", help="Keep downloaded MP4 file locally")

    args = parser.parse_args()

    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp_video = os.path.join(tmp_dir, "tiktok_video.mp4")
        target_path = "tiktok_saved.mp4" if args.keep else tmp_video

        success = download_tiktok_video(args.url, target_path)
        if not success:
            sys.exit(1)

        print("\n" + "=" * 60)
        print(" pcfix AI Video Vision Analysis")
        print("=" * 60 + "\n")

        analysis = analyze_video(target_path, args.prompt)

        # Sanitize any stray em dashes or circle dots from AI output
        clean_analysis = analysis.replace("\u2014", " - ").replace("\u2022", "*").replace("\u25cf", "*")
        print(clean_analysis)

if __name__ == "__main__":
    main()
