## 2024-10-09 - Particle Network Optimization
**Learning:** Found redundant O(N^2) canvas loop comparisons where inner loop starts at `j = i`, causing self-comparisons and zero-length draws, along with expensive `Math.sqrt()` operations before checking distance thresholds.
**Action:** Initialize inner loop at `j = i + 1` and use squared distance checks (`distSq`) before calculating `Math.sqrt()`.
