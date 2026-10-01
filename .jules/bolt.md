## 2023-10-24 - Canvas Particle Animation Bottleneck
**Learning:** In canvas particle animations, nested distance comparison loops iterating as `j = i` cause redundant self-comparisons resulting in zero-length draw calls (e.g., exactly N unnecessary operations per frame), and invoking `Math.sqrt` before comparing distances is computationally expensive.
**Action:** Always initialize inner loops at `j = i + 1` to skip self-comparisons, and compare squared distances (`dx*dx + dy*dy`) against squared thresholds to avoid unnecessary square root operations.
