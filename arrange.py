"""Copies the chapter PDFs from the repo root into www/pdfs/ under the names the app expects.
Matching is done on the original file names (e.g. "SKC Kinematics (1).pdf"), so no renaming is needed."""
import glob, os, re, shutil, sys

CHAPTERS = [  # (number, expected name, regex on lower-cased original file name)
    (1,  "01-mathematical-tools", r"mathematic|math.*tool"),
    (2,  "02-vector",             r"vector"),
    (3,  "03-unit-dimensions",    r"unit.*dimension|units? and (measurement|dimension)"),
    (4,  "04-error-measurement",  r"error"),
    (5,  "05-kinematics",         r"kinematic"),
    (6,  "06-nlm",                r"newton|laws of motion|\bnlm\b"),
    (7,  "07-circular-motion",    r"circular"),
    (8,  "08-work-power-energy",  r"work.*power|power.*energy"),
    (9,  "09-center-of-mass",     r"cent(re|er) of mass|\bcom\b"),
    (10, "10-rotation-motion",    r"rotation"),
    (11, "11-gravitation",        r"gravitation"),
    (12, "12-mech-solid",         r"propert\w* of so|solid"),
    (13, "13-mech-liquid",        r"fluid|liquid"),
    (14, "14-gas-law",            r"\bgas"),
    (15, "15-ktg-thermodynamics", r"ktg|thermodynamic"),
    (16, "16-heat-transfer",      r"heat"),
    (17, "17-wave",               r"\bwave"),
    (18, "18-shm",                r"simple harmonic|\bshm\b"),
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
        src = hits[0] if hits else None
    if src:
        shutil.copyfile(src, dst)
        print(f"Chapter {n:02d} -> {src}")
    else:
        missing.append(n)
        print(f"::warning::Chapter {n:02d}: no matching PDF found")
if missing:
    print("Chapters without a PDF:", missing)
    
