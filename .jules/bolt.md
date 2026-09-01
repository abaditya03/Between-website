## 2024-09-01 - Redundant Canvas Draw Calls
**Learning:** In canvas particle systems, initializing the inner loop with `j = i` instead of `j = i + 1` causes the particle to be compared with itself. Since distance is 0, it passes the threshold check and triggers an unnecessary zero-length line drawing (`moveTo` and `lineTo` the same coordinates) for every particle on every frame, significantly impacting rendering performance.
**Action:** Always initialize inner loops in O(N^2) collision/distance checks with `j = i + 1` to skip self-comparisons and prevent redundant rendering calls.
