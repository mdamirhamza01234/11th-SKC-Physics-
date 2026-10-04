"""Copies the chapter PDFs from the repo root into www/pdfs/ under the names the app expects.
Matching is done on the original file names (e.g. "SKC Kinematics (1).pdf"), so no renaming is needed."""
import glob, os, re, shutil, sys

CHAPTERS = [  # (number, expected name, regex on lower-cased original file name)
    (1,  "01-vector",             r"vector"),
    (2,  "02-unit-dimensions",    r"units? and (measurement|dimension)|unit.*dimension"),
    (3,  "03-error-measurement",  r"error|units? and measurement"),
    (4,  "04-kinematics",         r"kinematic"),
    (5,  "05-nlm",                r"newton|laws of motion"),
    (6,  "06-circular-motion",    r"circular"),
    (7,  "07-work-power-energy",  r"work.*power|power.*energy"),
    (8,  "08-center-of-mass",     r"cent(re|er) of mass|\bcom\b"),
    (9,  "09-rotation-motion",    r"rotation"),
    (10, "10-gravitation",        r"gravitation"),
    (11, "11-mech-solid",         r"propert\w* of so|solid"),
    (12, "12-mech-liquid",        r"fluid|liquid"),
    (13, "13-gas-law",            r"\bgas"),
    (14, "14-ktg-thermodynamics", r"ktg|thermodynamic"),
    (15, "15-heat-transfer",      r"heat"),
    (16, "16-wave",               r"\bwave"),
    (17, "17-shm",                r"simple harmonic|\bshm\b"),
]

os.makedirs("www/pdfs", exist_ok=True)
pdfs = sorted(glob.glob("*.pdf"))
print("PDFs found in repo root:", len(pdfs))
for p in pdfs: print("  -", p)

missing = []
for n, name, rx in CHAPTERS:
    dst = f"www/pdfs/{name}.pdf"
    exact = f"{name}.pdf"
    src = exact if exact in pdfs else None
    if not src:
        hits = [p for p in pdfs if re.search(rx, p.lower())]
        # chapter 3 prefers a file that says "error"; otherwise it shares the units/measurements file
        if n == 3:
            errs = [p for p in pdfs if "error" in p.lower()]
            hits = errs or hits
        src = hits[0] if hits else None
    if src:
        shutil.copyfile(src, dst)
        print(f"Chapter {n:02d} -> {src}")
    else:
        missing.append(n)
        print(f"::warning::Chapter {n:02d}: no matching PDF found")
if missing:
    print("Chapters without a PDF:", missing)
  
