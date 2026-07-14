## 2024-07-14 - Particle Network Loop Optimization
**Learning:** In the `ParticleNetwork` component, iterating `j = i` instead of `j = i + 1` causes 70 self-comparisons per frame (since `dx` and `dy` are 0, `dist` is 0, which is `< 120`). This leads to 70 unnecessary zero-length line draw calls every single frame. This is a subtle but impactful performance bug in ambient animations.
**Action:** Always start inner loop comparisons at `j = i + 1` when finding pairs to avoid redundant O(N) operations and unexpected draw calls.
