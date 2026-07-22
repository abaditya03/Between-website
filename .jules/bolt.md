## 2024-07-22 - Optimize Particle Network Loops
**Learning:** In particle networks, loop initializations like `j = i` instead of `j = i + 1` result in self-comparisons. Because distance `dist = 0` between the same particle satisfies distance thresholds (e.g., `dist < 120`), this inadvertently causes N redundant calculations and zero-length canvas draw calls per animation frame.
**Action:** Always initialize inner particle interaction loops with `j = i + 1` when calculating pairs to avoid redundant math and zero-length draw calls.
