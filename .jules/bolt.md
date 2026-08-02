## 2024-05-30 - Avoiding Zero-Length Canvas Draw Calls in Particle Networks
**Learning:** In an N-body particle network, starting the inner distance calculation loop at `j = i` instead of `j = i + 1` causes the particle to be compared against itself. The distance is 0, which satisfies the `dist < threshold` check, resulting in a zero-length canvas line being drawn for every particle every frame.
**Action:** Always initialize inner loops in particle pair calculations at `j = i + 1` to skip self-comparisons, saving array.length calculations and draw calls per frame.
