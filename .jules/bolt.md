## 2025-05-23 - Zero-Length Canvas Draw Calls in Particle Logic
**Learning:** Initializing the inner loop at `j = i` instead of `j = i + 1` in particle networks causes a self-comparison where distance is 0. This not only wastes N mathematical calculations per frame but also inadvertently triggers 0-length canvas draw calls when the distance threshold checks (`dist < threshold`) pass.
**Action:** Always start inner loops for distinct pair interactions at `j = i + 1` to skip redundant self-comparisons and avoid unexpected zero-length draws.
