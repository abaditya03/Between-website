## 2023-10-24 - Unoptimized inner loops in canvas particle systems
**Learning:** Zero-length canvas strokes from unoptimized inner loops (e.g., `j = i` instead of `j = i + 1`) can cause significant invisible rendering overhead in Particle Networks.
**Action:** Always verify that nested loop comparisons in particle physics skip self-comparisons to save N redundant draw calls per frame.
