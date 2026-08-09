## 2025-05-15 - Canvas Particle Loop Optimization
**Learning:** Initializing nested particle loops at `j = i` causes redundant zero-length draw calls because `dist = 0` satisfies distance thresholds.
**Action:** Always start inner loop at `j = i + 1` when calculating unique pairs to avoid N redundant operations per frame.
