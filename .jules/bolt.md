## 2024-03-20 - Unnecessary Draw Calls in Particle Systems
**Learning:** When calculating reciprocal particle distances, starting the inner loop at `j = i` causes a self-comparison where distance is 0. If the distance threshold check is `dist < threshold`, `0 < threshold` evaluates to true, resulting in an expensive zero-length canvas draw call for every particle per frame.
**Action:** Always initialize inner reciprocal loops at `j = i + 1` to skip self-comparisons and save array.length operations per frame.
