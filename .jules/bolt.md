## 2024-07-20 - Particle Network Optimization
**Learning:** In the `ParticleNetwork` component, the inner loop for drawing connecting lines initialized `j = i`. This resulted in comparing every particle with itself, calculating `dist = 0` (which is less than 120), and issuing a redundant zero-length canvas draw call. With 70 particles, this means 70 wasted calculations and draw calls per frame.
**Action:** Always initialize inner loops for pair-wise combinations as `j = i + 1` to skip self-comparisons and prevent redundant processing and 0-distance zero-length draws.
