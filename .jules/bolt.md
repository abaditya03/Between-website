## 2024-10-12 - Canvas O(N^2) Optimization
**Learning:** In the `ParticleNetwork` ambient animation, the nested loop checking distances between particles `(for let j = i)` was unnecessarily performing expensive `Math.sqrt` calculations and doing self-comparisons (`j = i`) which caused zero-length lines to be drawn.
**Action:** Always start nested loops at `j = i + 1` to skip self-comparisons and duplicate pairs, and use squared distances (`distSq < 14400`) to delay or avoid `Math.sqrt` until strictly needed for rendering.
