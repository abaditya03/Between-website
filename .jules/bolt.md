## 2023-10-25 - Particle Network Optimization
**Learning:** In the `ParticleNetwork` component, iterating the inner loop over interacting elements with `j = i` instead of `j = i + 1` causes redundant calculations, as well as `array.length` zero-length canvas draw calls when `dist = 0` satisfies the distance threshold.
**Action:** When implementing interactions between elements in a network where reciprocal pairs are already skipped, always initialize the inner loop at `j = i + 1` to skip self-comparisons and prevent unexpected zero-length draws.
