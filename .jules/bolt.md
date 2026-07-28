## 2024-05-18 - [Avoid Redundant Canvas Draw Calls in Particle Networks]
**Learning:** When calculating distances between particles in a network where reciprocal pairs are skipped (`j = i`), initializing the inner loop at `j = i` causes redundant zero-distance self-comparisons. This results in N redundant `canvas.stroke()` calls per frame when `dist = 0` satisfies distance thresholds.
**Action:** Initialize the inner loop at `j = i + 1` instead to skip self-comparisons.
