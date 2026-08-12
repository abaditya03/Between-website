## 2026-08-12 - Particle Network Loop Zero-Length Draw Optimization
**Learning:** When calculating interactions between particles where reciprocal pairs are skipped, starting the inner loop at `j = i` causes N self-comparisons (where dist=0), leading to N unexpected zero-length canvas draw calls every frame because 0 satisfies the distance threshold.
**Action:** Always initialize inner particle loops at `j = i + 1` to skip self-comparisons, saving operations and preventing wasted context draw calls.
