## 2024-06-07 - ParticleNetwork Loop Optimization
**Learning:** The background ParticleNetwork in index.html used nested loops (`j = i`) which resulted in redundant zero-distance calculations on every frame when checking interaction limits.
**Action:** When calculating interactions between particles in a network where reciprocal pairs are already skipped (`j = i`), initialize the inner loop at `j = i + 1` instead to skip self-comparisons. This avoids N redundant calculations per frame and prevents unexpected zero-length canvas draw calls when `dist = 0` satisfies distance thresholds.
