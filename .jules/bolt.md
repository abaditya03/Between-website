
## 2024-05-18 - Optimize particle collision and lines
**Learning:** When calculating interactions between particles in a network where reciprocal pairs are already skipped (`j = i`), initializing the inner loop at `j = i + 1` instead skips self-comparisons. This avoids N redundant calculations per frame and prevents unexpected zero-length canvas draw calls when `dist = 0` satisfies distance thresholds.
**Action:** When implementing particle networks or O(N^2) pairwise comparisons, always verify if `j=i` or `j=i+1` is appropriate to avoid N zero-distance calculations.
