
## 2024-06-17 - Prevent N zero-length draw calls in nested distance calculations
**Learning:** In canvas rendering loops calculating distances between particles, starting the inner loop at `j = i` instead of `j = i + 1` causes redundant calculations and N unexpected zero-length draw calls (`dist = 0`) per frame since self-distances are naturally 0 and < distance thresholds.
**Action:** Always start inner loops comparing pairs at `j = i + 1` when reciprocal and self-comparisons are unneeded.
