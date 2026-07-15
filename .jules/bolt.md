
## 2024-05-24 - [Avoid Self-Comparisons in N-Body Particle Algorithms]
**Learning:** When calculating interactions between particles in a network where reciprocal pairs are already skipped (`j = i`), initializing the inner loop at `j = i` still results in an unnecessary comparison of the particle to itself (where `dx = 0`, `dy = 0`, `dist = 0`). This satisfies the distance threshold (`dist < threshold`) and causes a redundant, zero-length draw call (e.g., `moveTo(x,y)`, `lineTo(x,y)`) for every single particle on every frame, which degrades canvas performance.
**Action:** When writing nested loops for unique pair interactions, always initialize the inner loop at `j = i + 1` to skip self-comparisons entirely.
