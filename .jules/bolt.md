## 2024-05-24 - Canvas Zero-Length Draw Calls
**Learning:** Calculating interactions between particles in a network where reciprocal pairs are skipped using `j = i` still includes self-comparisons. This causes unexpected zero-length canvas draw calls when `dist = 0` satisfies distance thresholds, wasting rendering cycles.
**Action:** When calculating interactions between particles in a network, always initialize the inner loop at `j = i + 1` instead of `j = i` to skip self-comparisons and save N redundant draw calls per frame.
