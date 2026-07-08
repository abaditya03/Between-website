## 2024-05-24 - Inner Loop Initialization in Particle Network
**Learning:** In canvas-based particle network animations, calculating distance pairs starting at `j = i` instead of `j = i + 1` evaluates N redundant self-calculations every frame, resulting in draw calls when `dist = 0`.
**Action:** When calculating interactions between points/particles, skip reciprocal pairs and self-comparisons by initializing the inner loop at `j = i + 1`. This provides measurable speedups in O(N^2) tight loops on every frame.
