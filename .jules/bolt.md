## 2024-10-04 - Canvas Animation Optimization
**Learning:** Found a redundant O(N^2) canvas loop comparison in index.html where particles check distance against themselves (`j = i`), resulting in unnecessary zero-length draw calls, and performing expensive `Math.sqrt()` on every iteration.
**Action:** Always initialize inner loops at `j = i + 1` to prevent self-comparisons and use squared distance checks (`distSq`) before calculating the exact square root.
