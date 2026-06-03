## 2024-06-03 - Avoiding Redundant Particle Self-Comparisons in Networks
**Learning:** In a particle network where interactions are reciprocal and self-comparisons are redundant (dist = 0), initializing the inner loop with `j = i` results in $N$ wasted zero-distance calculations per frame.
**Action:** When calculating interactions between particles in a network where reciprocal pairs are already skipped (`j = i`), initialize the inner loop at `j = i + 1` instead to also skip self-comparisons, avoiding redundant calculations per frame.
