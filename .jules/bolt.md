## 2024-08-11 - Particle Network Inner Loop Initialization
**Learning:** Initializing the inner loop at `j = i` instead of `j = i + 1` in particle networks leads to redundant self-comparisons and unexpected zero-length canvas draw calls when `dist = 0` satisfies the distance threshold.
**Action:** Always start inner loop particle comparisons at `j = i + 1` to skip self-comparisons and save array.length draw calls per frame.
