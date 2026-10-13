## 2025-05-15 - Canvas Animation Loop Optimization
**Learning:** Found redundant O(N^2) canvas loop comparisons in `ParticleNetwork`. The inner loop started at `j = i` instead of `j = i + 1`, causing unnecessary self-comparisons and zero-length draw calls. Also, used expensive `Math.sqrt()` before filtering by distance.
**Action:** Use `j = i + 1` to avoid self-comparisons. Use squared distance checks (`distSq < 14400`) before calling `Math.sqrt()`.
