## 2024-10-08 - Optimize canvas particle distance comparisons
**Learning:** The O(N^2) canvas loop comparisons for particles were using expensive Math.sqrt() operations for all pairs, and redundant inner loops starting at j = i caused self-comparisons and zero-length draws.
**Action:** Initialize nested loops at j = i + 1 and use squared distance checks (distSq) before calling Math.sqrt() to avoid unnecessary expensive math operations and duplicate draw calls.
