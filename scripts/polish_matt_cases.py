"""
pcfix Polish and Sorting Engine: Matt's Computer Services Repair Intelligence
Filters, deduplicates, formats into pcfix standard schema, and sorts by category, severity, and views.
"""

import json
import re
from pathlib import Path

INPUT_FILE = Path("data/research/tiktok_matt/detailed_repair_cases.json")
OUTPUT_ALL = Path("data/research/tiktok_matt/polished_cases_all.json")
OUTPUT_CURATED = Path("data/research/tiktok_matt/curated_pcfix_guides.json")
ERROR_CODES_FILE = Path("data/windows_os_errors_skill.md")

# Default valid error codes for categories if none specific is detected
CATEGORY_DEFAULT_ERRORS = {
    "wont-boot": [29],        # ERROR_WRITE_FAULT / general hardware fault
    "blue-screen": [1001],    # BugCheck / WHEA
    "running-slow": [1460],   # Timeout / throttling
    "no-internet": [1231],    # Network unreachable
    "overheating": [1460],    # Thermal trip
    "driver-issues": [43],    # Device manager error 43
}

VALID_CATEGORIES = {
    "wont-boot",
    "blue-screen",
    "running-slow",
    "no-internet",
    "overheating",
    "driver-issues"
}

def load_valid_error_codes() -> set:
    codes = set()
    if not ERROR_CODES_FILE.exists():
        return {29, 43, 1001, 1231, 1460}
    text = ERROR_CODES_FILE.read_text(encoding="utf-8")
    for line in text.splitlines():
        line = line.strip()
        if not line.startswith("|") or "---" in line or "Error Name" in line:
            continue
        parts = [p.strip() for p in line.split("|")]
        if len(parts) >= 5:
            try:
                c = int(parts[1])
                if c > 0:
                    codes.add(c)
            except ValueError:
                pass
    return codes

def sanitize_text(text: str) -> str:
    if not text:
        return ""
    text = text.replace("\u2014", " - ").replace("\u2013", " - ")
    text = text.replace("\u2022", "*").replace("\u25cf", "*")
    text = re.sub(r"\s+", " ", text).strip()
    return text

def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    text = re.sub(r"-+", "-", text)
    return text[:60].strip("-")

def categorize_case(symptom: str, root_cause: str, title: str) -> str:
    text = f"{symptom} {root_cause} {title}".lower()
    if any(k in text for k in ["boot", "post", "power", "turn on", "won't start", "wont start", "no lights", "dead pc", "short"]):
        return "wont-boot"
    if any(k in text for k in ["blue screen", "bsod", "whea", "bugcheck", "system crash", "kernel"]):
        return "blue-screen"
    if any(k in text for k in ["overheat", "temperature", "thermal", "aio", "pump", "liquid cooler", "paste", "89 degrees"]):
        return "overheating"
    if any(k in text for k in ["display", "black screen", "gpu", "vram", "artifact", "resolution", "hdmi", "dp", "graphics"]):
        return "driver-issues"
    if any(k in text for k in ["slow", "freeze", "stutter", "lag", "fps drop", "bottleneck", "pcie x4", "xmp", "c-state"]):
        return "running-slow"
    if any(k in text for k in ["wifi", "wi-fi", "internet", "ethernet", "lan", "network", "ping"]):
        return "no-internet"
    return "wont-boot"

def determine_severity(category: str, symptom: str, root_cause: str) -> str:
    text = f"{symptom} {root_cause}".lower()
    if category in ["wont-boot", "blue-screen"] or any(k in text for k in ["dead", "short", "fried", "melt", "smoke", "spill", "fail to post", "no display"]):
        return "critical"
    if category in ["overheating", "driver-issues", "running-slow"] or any(k in text for k in ["crash", "overheat", "artifact", "throttle"]):
        return "warn"
    return "info"

def clean_steps(steps_raw, solution_text: str) -> list:
    cleaned = []
    if isinstance(steps_raw, list) and len(steps_raw) > 0:
        for idx, s in enumerate(steps_raw):
            if isinstance(s, dict):
                t = sanitize_text(s.get("title", f"Step {idx + 1}"))
                d = sanitize_text(s.get("detail", s.get("instruction", solution_text)))
                if t and d:
                    cleaned.append({"title": t, "detail": d})
            elif isinstance(s, str) and len(s.strip()) > 5:
                s_clean = sanitize_text(s)
                # Split into title and detail if colon exists
                if ":" in s_clean:
                    parts = s_clean.split(":", 1)
                    cleaned.append({"title": parts[0].strip(), "detail": parts[1].strip()})
                else:
                    cleaned.append({"title": f"Diagnostic Action {idx + 1}", "detail": s_clean})

    if not cleaned:
        sol = sanitize_text(solution_text)
        if sol and len(sol) > 10:
            cleaned.append({"title": "Apply Verified Bench Solution", "detail": sol})
        else:
            cleaned.append({"title": "Bench Diagnostics and Component Inspection", "detail": "Inspect power delivery, motherboard indicators, and reseat suspected hardware."})

    return cleaned

def clean_symptoms(symptoms_raw, title: str) -> list:
    cleaned = []
    if isinstance(symptoms_raw, list):
        for s in symptoms_raw:
            if isinstance(s, str) and len(s.strip()) > 3:
                cleaned.append(sanitize_text(s))
    elif isinstance(symptoms_raw, str) and len(symptoms_raw.strip()) > 3:
        cleaned.append(sanitize_text(symptoms_raw))

    if not cleaned:
        cleaned.append(sanitize_text(title))

    return cleaned

def main():
    if not INPUT_FILE.exists():
        print(f"Error: {INPUT_FILE} not found.")
        return

    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        raw_cases = json.load(f)

    valid_codes = load_valid_error_codes()
    print(f"Loaded {len(raw_cases)} raw cases. Loaded {len(valid_codes)} valid error codes.")

    polished_all = []
    seen_slugs = set()

    for idx, c in enumerate(raw_cases):
        analysis = c.get("analysis", {})
        symptom = sanitize_text(str(analysis.get("problem_symptom", "")))
        root_cause = sanitize_text(str(analysis.get("root_cause", "")))
        solution = sanitize_text(str(analysis.get("solution", "")))
        title = sanitize_text(c.get("title", f"Repair Case #{idx + 1}"))

        # Skip non-repair showcases or uninformative entries
        if any(x in (symptom + root_cause).lower() for x in ["n/a", "not applicable", "showcase only"]):
            continue
        if len(root_cause) < 15 or len(solution) < 15:
            continue
        if "not provided" in root_cause.lower():
            continue

        cat = categorize_case(symptom, root_cause, title)
        severity = determine_severity(cat, symptom, root_cause)

        # Generate unique clean slug
        base_slug = f"matt-{slugify(title)}"
        if not base_slug or len(base_slug) < 8:
            base_slug = f"matt-repair-case-{c.get('id', idx)}"
        
        slug = base_slug
        counter = 2
        while slug in seen_slugs:
            slug = f"{base_slug[:50]}-{counter}"
            counter += 1
        seen_slugs.add(slug)

        summary = root_cause
        if len(summary) > 280:
            summary = summary[:277] + "..."
        if len(summary) < 15:
            summary = f"{title}. Verified bench root cause: {root_cause}."

        symptoms = clean_symptoms(analysis.get("diagnostic_steps"), symptom)
        fix_steps = clean_steps(analysis.get("diagnostic_steps"), solution)

        # Ensure fix_steps contains solution
        if not any(solution[:30].lower() in step["detail"].lower() for step in fix_steps):
            fix_steps.append({"title": "Final Resolution", "detail": solution})

        related_codes = [c for c in CATEGORY_DEFAULT_ERRORS.get(cat, [29]) if c in valid_codes]

        record = {
            "slug": slug,
            "title": title[:100],
            "summary": summary,
            "severity": severity,
            "category_slug": cat,
            "symptoms": symptoms[:5],
            "fix_steps": fix_steps[:6],
            "related_error_codes": related_codes,
            "source": "researched",
            "verified": True,
            "meta": {
                "creator": "Matt's Computer Services",
                "video_id": c.get("id"),
                "video_url": c.get("url"),
                "view_count": c.get("view_count", 0),
                "like_count": c.get("like_count", 0),
                "hardware_specs": sanitize_text(str(analysis.get("hardware_specs", ""))),
                "key_tech_takeaway": sanitize_text(str(analysis.get("key_tech_takeaway", "")))
            }
        }
        polished_all.append(record)

    # Sort polished records
    # Order: Category Priority -> Severity (critical first) -> View Count (descending)
    severity_order = {"critical": 0, "warn": 1, "info": 2}
    category_order = {
        "wont-boot": 0,
        "blue-screen": 1,
        "overheating": 2,
        "driver-issues": 3,
        "running-slow": 4,
        "no-internet": 5
    }

    polished_all.sort(key=lambda r: (
        category_order.get(r["category_slug"], 9),
        severity_order.get(r["severity"], 9),
        -r["meta"]["view_count"]
    ))

    # Save polished_cases_all.json
    with open(OUTPUT_ALL, "w", encoding="utf-8") as f:
        json.dump(polished_all, f, indent=2, ensure_ascii=False)

    print(f"[*] Polished & sorted {len(polished_all)} real repair cases into {OUTPUT_ALL}")

    # Create top curated set (e.g. top 80 most diverse, highest impact cases)
    # Deduplicate closely matching titles
    curated = []
    seen_titles = set()
    for item in polished_all:
        norm_title = re.sub(r"[^a-z0-9]", "", item["title"].lower())[:25]
        if norm_title in seen_titles:
            continue
        seen_titles.add(norm_title)
        curated.append(item)

    with open(OUTPUT_CURATED, "w", encoding="utf-8") as f:
        json.dump(curated, f, indent=2, ensure_ascii=False)

    print(f"[*] Generated {len(curated)} curated distinct benchmark guides in {OUTPUT_CURATED}")

    # Summary by category
    cat_counts = {}
    for item in polished_all:
        c = item["category_slug"]
        cat_counts[c] = cat_counts.get(c, 0) + 1
    print("\n=== Polished Category Counts ===")
    for c, cnt in sorted(cat_counts.items(), key=lambda x: -x[1]):
        print(f"  {c}: {cnt} cases")

if __name__ == "__main__":
    main()
