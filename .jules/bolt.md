## 2024-05-24 - Canvas Particle Self-Comparison
**Learning:** When calculating interactions between particles in a network where reciprocal pairs are already skipped (`j = i`), initializing the inner loop at `j = i` includes self-comparisons. This results in N redundant zero-length canvas draw calls per frame because dist=0 satisfies distance thresholds.
**Action:** Initialize inner loops at `j = i + 1` to skip self-comparisons and avoid unexpected zero-length draw calls when dist=0 satisfies distance thresholds.
