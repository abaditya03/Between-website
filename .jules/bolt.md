## 2026-05-12 - Math Optimization in Particle Network
**Learning:** Found a classic performance bottleneck in the animation loop of a Particle Network component, specifically calculating Euclidean distances using `Math.sqrt` and doing reciprocal pair calculations.
**Action:** When calculating interactions between particles in a network, initialize the inner loop at `j = i + 1` to skip self-comparisons and redundant reciprocal pair calculations. Additionally, compare squared distances first (e.g., `distSq < 14400`) before calling the computationally expensive `Math.sqrt()`.
