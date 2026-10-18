"""
pcfix Comprehensive TikTok Repair Knowledge Engine: Matt's Computer Services
Pulls full word-for-word spoken transcripts (.vtt) for all 1,170 repair videos
and structures them into production-grade hardware diagnostic records using Gemini.
"""

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path
from dotenv import load_dotenv
import yt_dlp

load_dotenv()

BASE_DIR = Path("data/research/tiktok_matt")
REPAIR_QUEUE_FILE = BASE_DIR / "repair_queue.json"
TRANSCRIPTS_DIR = BASE_DIR / "transcripts"
DATABASE_FILE = BASE_DIR / "detailed_repair_cases.json"

def ensure_dirs():
    TRANSCRIPTS_DIR.mkdir(parents=True, exist_ok=True)

def clean_vtt_content(vtt_text: str) -> str:
    """Parses WebVTT subtitle text into clean, deduplicated prose."""
    lines = vtt_text.splitlines()
    cleaned_cues = []
    seen = set()

    for line in lines:
        line = line.strip()
        # Skip header, timestamps, and empty lines
        if not line or line.startswith("WEBVTT") or "-->" in line or line.isdigit():
            continue
        # Remove XML/HTML formatting tags
        line = re.sub(r"<[^>]+>", "", line)
        if line and line not in seen:
            seen.add(line)
            cleaned_cues.append(line)

    return " ".join(cleaned_cues)

def fetch_spoken_transcript(video_id: str, video_url: str) -> str:
    """Downloads subtitle transcript (.vtt) for a TikTok video without downloading media."""
    transcript_txt_path = TRANSCRIPTS_DIR / f"{video_id}.txt"
    if transcript_txt_path.exists():
        return transcript_txt_path.read_text(encoding="utf-8")

    out_prefix = str(TRANSCRIPTS_DIR / f"raw_{video_id}")
    ydl_opts = {
        "skip_download": True,
        "writesubtitles": True,
        "subtitleslangs": ["eng-US", "en"],
        "quiet": True,
        "no_warnings": True,
        "outtmpl": out_prefix
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.extract_info(video_url, download=True)
    except Exception as e:
        # Some videos may not have subtitles
        pass

    # Find downloaded vtt file
    vtt_candidates = list(TRANSCRIPTS_DIR.glob(f"raw_{video_id}*.vtt"))
    if vtt_candidates:
        raw_vtt = vtt_candidates[0].read_text(encoding="utf-8", errors="ignore")
        clean_text = clean_vtt_content(raw_vtt)
        # Cleanup raw vtt
        for f in vtt_candidates:
            try:
                f.unlink()
            except Exception:
                pass
        transcript_txt_path.write_text(clean_text, encoding="utf-8")
        return clean_text

    return ""

def analyze_with_ai(title: str, description: str, transcript: str) -> dict:
    from google import genai
    from google.genai import types

    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY / GOOGLE_API_KEY missing.")

    client = genai.Client(api_key=api_key)

    context_text = f"Title: {title}\nDescription: {description}\n\nSpoken Technician Transcript:\n{transcript}"

    prompt = (
        "You are an expert PC hardware diagnostician. Analyze this real PC repair video transcript from Matt's Computer Services.\n"
        "Extract the technical hardware diagnostic case into clean JSON with these exact fields:\n"
        "{\n"
        '  "problem_symptom": "What exact hardware or software symptom occurred?",\n'
        '  "hardware_specs": "Components mentioned (Motherboard, CPU, GPU, RAM, PSU, Cooler, etc.)",\n'
        '  "diagnostic_steps": ["Step 1 performed", "Step 2 performed", "Step 3 performed"],\n'
        '  "root_cause": "The verified underlying physical/electrical/firmware defect",\n'
        '  "solution": "Exact steps taken to fix the PC",\n'
        '  "key_tech_takeaway": "Actionable technical rule or tip for bench technicians"\n'
        "}\n"
        "If the video is a generic showcase without a distinct failure, summarize the technical build/hardware findings.\n"
        "Output ONLY raw valid JSON."
    )

    models_to_try = ["gemini-3.8-flash", "gemini-3.5-flash-lite"]
    for m in models_to_try:
        try:
            response = client.models.generate_content(
                model=m,
                contents=[context_text, prompt],
                config=types.GenerateContentConfig(
                    temperature=0.1,
                    response_mime_type="application/json"
                )
            )
            return json.loads(response.text)
        except Exception as e:
            if m == models_to_try[-1]:
                raise e
            time.sleep(1)

    return {"error": "Failed all models"}

def run_pipeline(limit: int = 10, delay: float = 1.0):
    ensure_dirs()
    if not REPAIR_QUEUE_FILE.exists():
        print(f"Error: {REPAIR_QUEUE_FILE} not found. Run catalog scrape first.")
        sys.exit(1)

    with open(REPAIR_QUEUE_FILE, "r", encoding="utf-8") as f:
        queue = json.load(f)

    db = []
    if DATABASE_FILE.exists():
        try:
            with open(DATABASE_FILE, "r", encoding="utf-8") as f:
                db = json.load(f)
        except Exception:
            db = []

    processed_ids = {c["id"] for c in db}
    pending = [item for item in queue if item["id"] not in processed_ids]

    print("======================================================")
    print(" pcfix Matt's Computer Services Diagnostic Pipeline")
    print("======================================================")
    print(f"Total repair cases in queue: {len(queue)}")
    print(f"Already processed:          {len(db)}")
    print(f"Pending to process:         {len(pending)}")
    target_count = min(limit, len(pending)) if limit > 0 else len(pending)
    print(f"Target count for this run:  {target_count}\n")

    for i, item in enumerate(pending[:target_count]):
        v_id = item["id"]
        title = item["title"]
        url = item["url"]

        print(f"[{i + 1}/{target_count}] Processing #{item['index']}: {title}")

        # 1. Fetch transcript
        transcript = fetch_spoken_transcript(v_id, url)
        if transcript:
            print(f"      [Subtitles] Extracted {len(transcript)} chars of spoken transcript.")
        else:
            print("      [Subtitles] No subtitle track found; analyzing from title & metadata.")

        # 2. Extract technical case via AI
        try:
            analysis = analyze_with_ai(title, item.get("description", ""), transcript)
            case_record = {
                "id": v_id,
                "index": item["index"],
                "title": title,
                "url": url,
                "duration": item.get("duration"),
                "view_count": item.get("view_count"),
                "like_count": item.get("like_count"),
                "timestamp": item.get("timestamp"),
                "has_transcript": bool(transcript),
                "transcript": transcript,
                "analysis": analysis
            }
            db.append(case_record)

            # Persist immediately
            with open(DATABASE_FILE, "w", encoding="utf-8") as f:
                json.dump(db, f, indent=2, ensure_ascii=False)

            print(f"      [PASS] Successfully structured & saved to database.")
        except Exception as e:
            print(f"      [!] AI analysis failed: {e}")

        if i < target_count - 1 and delay > 0:
            time.sleep(delay)

    print("\n======================================================")
    print(f" Run Complete. Total cases in database: {len(db)}/{len(queue)}")
    print(f" File: {DATABASE_FILE}")
    print("======================================================")

def main():
    parser = argparse.ArgumentParser(description="Process Matt's Computer Services videos into structured diagnostic cases.")
    parser.add_argument("--limit", type=int, default=10, help="Number of cases to process in this run (0 = all pending)")
    parser.add_argument("--delay", type=float, default=1.0, help="Delay between API requests in seconds")

    args = parser.parse_args()
    run_pipeline(limit=args.limit, delay=args.delay)

if __name__ == "__main__":
    main()
