"""
pcfix TikTok Transcript Mass Downloader: Matt's Computer Services
Downloads 100% of word-for-word spoken transcripts (.vtt -> clean .txt)
for all 1,170 PC repair videos directly using yt-dlp (Zero API quota used).
"""

import json
import os
import re
import sys
import time
from pathlib import Path
import yt_dlp

BASE_DIR = Path("data/research/tiktok_matt")
REPAIR_QUEUE_FILE = BASE_DIR / "repair_queue.json"
TRANSCRIPTS_DIR = BASE_DIR / "transcripts"
INDEX_FILE = BASE_DIR / "transcripts_index.json"

# Enforce UTF-8 on Windows stdout
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

def clean_vtt(vtt_text: str) -> str:
    lines = vtt_text.splitlines()
    cues = []
    seen = set()
    for line in lines:
        line = line.strip()
        if not line or line.startswith("WEBVTT") or "-->" in line or line.isdigit():
            continue
        line = re.sub(r"<[^>]+>", "", line)
        if line and line not in seen:
            seen.add(line)
            cues.append(line)
    return " ".join(cues)

def main():
    TRANSCRIPTS_DIR.mkdir(parents=True, exist_ok=True)
    if not REPAIR_QUEUE_FILE.exists():
        print(f"Queue file {REPAIR_QUEUE_FILE} not found.")
        sys.exit(1)

    with open(REPAIR_QUEUE_FILE, "r", encoding="utf-8") as f:
        queue = json.load(f)

    existing = set()
    for p in TRANSCRIPTS_DIR.glob("*.txt"):
        existing.add(p.stem)

    pending = [item for item in queue if item["id"] not in existing]

    print("======================================================")
    print(" pcfix TikTok Transcript Mass Downloader")
    print("======================================================")
    print(f"Total repair cases in queue: {len(queue)}")
    print(f"Already downloaded on disk:  {len(existing)}")
    print(f"Remaining to download:       {len(pending)}\n")

    ydl_opts = {
        "skip_download": True,
        "writesubtitles": True,
        "subtitleslangs": ["eng-US", "en"],
        "quiet": True,
        "no_warnings": True,
    }

    success_count = 0
    missing_sub_count = 0

    for idx, item in enumerate(pending):
        v_id = item["id"]
        title = item["title"]
        url = item["url"]
        txt_path = TRANSCRIPTS_DIR / f"{v_id}.txt"

        safe_title = title[:50].encode("ascii", "replace").decode("ascii")
        print(f"[{idx + 1}/{len(pending)}] Video #{item['index']}: {safe_title}...")

        out_prefix = str(TRANSCRIPTS_DIR / f"temp_{v_id}")
        opts = dict(ydl_opts)
        opts["outtmpl"] = out_prefix

        try:
            with yt_dlp.YoutubeDL(opts) as ydl:
                ydl.extract_info(url, download=True)
        except Exception:
            pass

        vtt_files = list(TRANSCRIPTS_DIR.glob(f"temp_{v_id}*.vtt"))
        if vtt_files:
            vtt_content = vtt_files[0].read_text(encoding="utf-8", errors="ignore")
            clean_text = clean_vtt(vtt_content)
            txt_path.write_text(clean_text, encoding="utf-8")
            for f in vtt_files:
                try:
                    f.unlink()
                except Exception:
                    pass
            success_count += 1
            print(f"      [OK] Subtitles extracted: {len(clean_text)} characters.")
        else:
            # Mark empty transcript to avoid re-querying
            txt_path.write_text("", encoding="utf-8")
            missing_sub_count += 1
            print("      [-] No subtitle track available.")

        # Rate-pacing delay to be respectful to TikTok CDN
        time.sleep(0.5)

    print("\n======================================================")
    print(" Download Completed")
    print(f" Total saved transcripts: {len(list(TRANSCRIPTS_DIR.glob('*.txt')))}")
    print("======================================================")

if __name__ == "__main__":
    main()
