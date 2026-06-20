
## 2024-05-18 - Avoid self-comparisons in O(N^2) particle networks
**Learning:** In the `ParticleNetwork` component, iterating `j` from `i` instead of `i+1` results in redundant distance calculations where `dist === 0`, causing exactly 70 invisible, zero-length draw calls (`ctx.lineTo`) per frame and redundant distance evaluation, wasting processing time without visual impact.
**Action:** When calculating interactions between entities in a closed network where pairs are undirected and non-self-referential, always initialize the inner loop offset by `+ 1` to halve operations and prevent invalid `distance === 0` renders.
