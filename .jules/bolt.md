## 2024-05-24 - Canvas Particle Network Loop Optimization
**Learning:** In a canvas particle network where reciprocal pairs are skipped, initializing the inner loop at `j = i` causes the distance threshold to be satisfied (since distance is 0) and results in N zero-length `stroke()` calls per frame.
**Action:** Always start inner loops for reciprocal particle comparisons at `j = i + 1` to skip self-comparisons.
