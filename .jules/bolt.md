## 2024-05-24 - Canvas Particle Self-Comparison
**Learning:** In particle network animations, setting the inner loop to `j = i` instead of `j = i + 1` causes distance calculations of a particle to itself, resulting in `dist = 0`. This satisfies distance thresholds and triggers hidden, unnecessary zero-length canvas draw calls for every particle every frame.
**Action:** Always start inner reciprocal loops at `j = i + 1` to skip self-comparisons and prevent redundant N zero-length canvas draws.
