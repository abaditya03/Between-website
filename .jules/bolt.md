## 2023-10-17 - Canvas Animation O(N^2) optimization
**Learning:** Found redundant O(N^2) canvas loop comparisons and expensive `Math.sqrt()` usage for particle distances in the `animate` function.
**Action:** Use nested distance comparison loops that initialize the inner loop at `j = i + 1` (to avoid self-comparisons and zero-length draws) and use squared distance checks (e.g., `distSq`) before invoking expensive `Math.sqrt()` operations.
