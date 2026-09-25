## 2024-05-20 - Canvas Animation Nested Loop Optimization
**Learning:** Found an O(N^2) loop where `j` started at `i`, causing zero-length draws to itself and needlessly calling expensive `Math.sqrt()` on every pair before range checking.
**Action:** Initialize inner loop at `j = i + 1` to skip self and use squared distance checks `distSq` before taking `Math.sqrt()`.
