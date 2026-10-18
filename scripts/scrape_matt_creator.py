"""
pcfix TikTok Complete Ingestion Pipeline: Matt's Computer Services (@mattscomputerservices)
Extracts all video records, metadata, categorizes PC issues, and runs batch AI vision diagnostics.
"""

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

MATT_SEC_UID = "MS4wLjABAAAABiaAktAqnMyhgGQendT7J515fOpiNFw-tCw46EEG2LlbzQGM666g83tlcnqdz4v0"
OUTPUT_DIR = Path("data/research/tiktok_matt")
CATALOG_FILE = OUTPUT_DIR / "catalog_all.json"
REPAIR_QUEUE_FILE = OUTPUT_DIR / "repair_queue.json"
CASES_FILE = OUTPUT_DIR / "pc_repair_cases.json"

REPAIR_KEYWORDS = [
    "repair", "crash", "won't", "wont", "error", "black screen", "no display", "no post",
    "overheat", "temperature", "blue screen", "bsod", "dead", "freeze", "freezing",
    "fix", "diagnose", "diagnostic", "short", "liquid", "smoke", "damage", "fried",
    "power", "aio", "cooler", "thermal", "gpu", "cpu", "ram", "motherboard", "bios",
    "psu", "shutdown", "rebuild", "broken", "destroyed", "fail", "failure", "stuck"
]

def ensure_dirs():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def classify_video(title: str, description: str) -> str:
    text = f"{title} {description}".lower()
    for kw in REPAIR_KEYWORDS:
        if kw in text:
            return "repair_diagnosis"
    if any(k in text for k in ["build", "unboxing", "aesthetic", "custom", "cable management", "theme"]):
        return "custom_build"
    return "tech_tips"

def fetch_all_catalog() -> list:
    ensure_dirs()
    print(f"[*] Extracting complete video archive for @mattscomputerservices (secUid: {MATT_SEC_UID})...")
    print("    This pulls full metadata for all ~1,570 videos. Please wait 30-60 seconds...")

    cmd = [
        sys.executable,
        "-m", "yt_dlp",
        "--flat-playlist",
        "-J",
        "--no-warnings",
        f"tiktokuser:{MATT_SEC_UID}"
    ]

    proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, encoding="utf-8")
    if proc.returncode != 0:
        print(f"Error extracting catalog: {proc.stderr}", file=sys.stderr)
        return []

    try:
        data = json.loads(proc.stdout)
        raw_entries = data.get("entries", [])
        print(f"[*] Retrieved {len(raw_entries)} raw entries from TikTok feed.")

        catalog = []
        repair_queue = []

        for idx, entry in enumerate(raw_entries):
            video_id = entry.get("id")
            title = (entry.get("title") or "").strip()
            desc = (entry.get("description") or "").strip()
            category = classify_video(title, desc)

            cover = None
            if entry.get("thumbnails"):
                cover = entry["thumbnails"][0].get("url")

            record = {
                "index": idx + 1,
                "id": video_id,
                "title": title,
                "description": desc,
                "url": f"https://www.tiktok.com/@mattscomputerservices/video/{video_id}",
                "category": category,
                "duration": entry.get("duration"),
                "timestamp": entry.get("timestamp"),
                "view_count": entry.get("view_count") or 0,
                "like_count": entry.get("like_count") or 0,
                "comment_count": entry.get("comment_count") or 0,
                "save_count": entry.get("save_count") or 0,
                "repost_count": entry.get("repost_count") or 0,
                "cover_url": cover
            }
            catalog.append(record)

            if category == "repair_diagnosis":
                repair_queue.append(record)

        # Write catalog_all.json
        with open(CATALOG_FILE, "w", encoding="utf-8") as f:
            json.dump(catalog, f, indent=2, ensure_ascii=False)

        # Write repair_queue.json
        with open(REPAIR_QUEUE_FILE, "w", encoding="utf-8") as f:
            json.dump(repair_queue, f, indent=2, ensure_ascii=False)

        print(f"[*] Saved {len(catalog)} total videos to: {CATALOG_FILE}")
        print(f"[*] Identified {len(repair_queue)} unique PC repair & diagnosis cases: {REPAIR_QUEUE_FILE}")

        # Summary stats
        cats = {}
        for c in catalog:
            cats[c["category"]] = cats.get(c["category"], 0) + 1
        print("\n=== Content Breakdown ===")
        for cat, cnt in cats.items():
            print(f"  {cat}: {cnt} videos")

        return catalog

    except Exception as e:
        print(f"Failed to parse yt-dlp playlist JSON: {e}", file=sys.stderr)
        return []

def download_video_clip(url: str, dest_path: str) -> bool:
    cmd = [
        sys.executable,
        "-m", "yt_dlp",
        "--no-warnings",
        "-f", "bestvideo[vcodec^=avc1]+bestaudio/best[vcodec^=avc1]/best",
        "-o", dest_path,
        url
    ]
    res = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True)
    return res.returncode == 0

def analyze_repair_case(video_path: str, title: str) -> dict:
    from google import genai
    from google.genai import types

    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY / GOOGLE_API_KEY missing from environment.")

    client = genai.Client(api_key=api_key)
    video_file = client.files.upload(file=video_path)

    while video_file.state.name == "PROCESSING":
        time.sleep(2)
        video_file = client.files.get(name=video_file.name)

    if video_file.state.name == "FAILED":
        raise ValueError("Gemini video processing failed.")

    prompt = (
        f"You are an expert PC hardware diagnostic engineer analyzing a repair case by Matt's Computer Services.\n"
        f"Video Title: {title}\n"
        "Watch and listen to the video and extract the technical PC repair case into pure JSON with these fields:\n"
        "{\n"
        '  "problem_symptom": "What problem occurred with the PC?",\n'
        '  "hardware_specs": "Components identified in the build (CPU, GPU, RAM, Motherboard, Cooler, PSU)",\n'
        '  "diagnostic_steps": ["Step 1", "Step 2", "Step 3"],\n'
        '  "root_cause": "The actual physical/electrical/software root cause diagnosed",\n'
        '  "final_solution": "What was done to fix the issue",\n'
        '  "key_tech_takeaway": "Actionable advice for technicians to prevent or diagnose this issue"\n'
        "}\n"
        "Output ONLY raw valid JSON without markdown fences."
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[video_file, prompt],
        config=types.GenerateContentConfig(
            temperature=0.1,
            response_mime_type="application/json"
        )
    )

    try:
        client.files.delete(name=video_file.name)
    except Exception:
        pass

    try:
        return json.loads(response.text)
    except Exception:
        return {"raw_analysis": response.text}

def run_batch_diagnosis(batch_size: int = 10, delay_seconds: int = 4):
    ensure_dirs()
    if not REPAIR_QUEUE_FILE.exists():
        print("[*] Repair queue not found. Fetching catalog first...")
        fetch_all_catalog()

    with open(REPAIR_QUEUE_FILE, "r", encoding="utf-8") as f:
        queue = json.load(f)

    cases = []
    if CASES_FILE.exists():
        try:
            with open(CASES_FILE, "r", encoding="utf-8") as f:
                cases = json.load(f)
        except Exception:
            cases = []

    analyzed_ids = {c["id"] for c in cases}
    pending = [v for v in queue if v["id"] not in analyzed_ids]

    print(f"\n[*] Total repair cases in queue: {len(queue)}")
    print(f"[*] Already analyzed cases:     {len(cases)}")
    print(f"[*] Pending cases to analyze:   {len(pending)}")

    to_process = pending[:batch_size]
    print(f"[*] Processing batch of {len(to_process)} cases...\n")

    for idx, item in enumerate(to_process):
        print(f"[{idx + 1}/{len(to_process)}] Case #{item['index']}: {item['title']}")
        print(f"      URL: {item['url']} | Views: {item['view_count']}")

        with tempfile.TemporaryDirectory() as tmp_dir:
            tmp_mp4 = os.path.join(tmp_dir, f"{item['id']}.mp4")
            print("      Downloading MP4 stream...")
            if not download_video_clip(item["url"], tmp_mp4):
                print("      [!] Download failed, skipping.")
                continue

            print("      Analyzing via Gemini 2.5 Flash Vision...")
            try:
                diag = analyze_repair_case(tmp_mp4, item["title"])
                case_entry = {
                    "id": item["id"],
                    "index": item["index"],
                    "title": item["title"],
                    "url": item["url"],
                    "view_count": item["view_count"],
                    "duration": item["duration"],
                    "analysis": diag
                }
                cases.append(case_entry)
                with open(CASES_FILE, "w", encoding="utf-8") as f:
                    json.dump(cases, f, indent=2, ensure_ascii=False)
                print(f"      [PASS] Successfully analyzed & persisted to {CASES_FILE}")
            except Exception as e:
                print(f"      [!] Error: {e}")

        # Rate-limiting delay
        if idx < len(to_process) - 1:
            time.sleep(delay_seconds)

    print(f"\n[*] Batch finished. Total cases saved: {len(cases)}/{len(queue)}")

def main():
    parser = argparse.ArgumentParser(description="Scrape all content from Matt's Computer Services TikTok.")
    parser.add_argument("--fetch-all", action="store_true", help="Extract entire video catalog (~1,570 videos)")
    parser.add_argument("--analyze", type=int, default=0, help="Number of repair cases to analyze with Gemini vision")
    parser.add_argument("--status", action="store_true", help="Show current scraping and diagnosis status")

    args = parser.parse_args()

    if args.status:
        ensure_dirs()
        total_cat = len(json.load(open(CATALOG_FILE, "r", encoding="utf-8"))) if CATALOG_FILE.exists() else 0
        total_queue = len(json.load(open(REPAIR_QUEUE_FILE, "r", encoding="utf-8"))) if REPAIR_QUEUE_FILE.exists() else 0
        total_cases = len(json.load(open(CASES_FILE, "r", encoding="utf-8"))) if CASES_FILE.exists() else 0
        print(f"Catalog total videos:   {total_cat}")
        print(f"Repair cases identified: {total_queue}")
        print(f"AI cases analyzed:      {total_cases}")
        return

    if args.fetch_all or not CATALOG_FILE.exists():
        fetch_all_catalog()

    if args.analyze > 0:
        run_batch_diagnosis(batch_size=args.analyze)

if __name__ == "__main__":
    main()
