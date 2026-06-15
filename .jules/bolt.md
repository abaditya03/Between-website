## 2024-06-15 - Redundant Particle Self-Comparisons
**Learning:** In a particle network where particles connect if distance < threshold, calculating `j = i` (self-comparison) yields `dist = 0`. This unintentionally satisfies the threshold condition, resulting in an invisible 0-length line draw call (`moveTo` and `lineTo` the same coordinates) for EVERY particle EVERY frame.
**Action:** Always start inner loop intersection calculations at `j = i + 1` to skip self-comparisons. This avoids both redundant loop iterations and unexpected canvas rendering calls that consume CPU.
