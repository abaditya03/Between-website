## 2024-11-20 - Canvas Particle Animation Optimization
**Learning:** Nested particle distance comparisons often perform unnecessary self-comparisons and redundant `Math.sqrt` calls for particles beyond the interaction threshold.
**Action:** Initialize inner loops at `j = i + 1`, use squared distance checks before invoking `Math.sqrt`, and skip zero-length draws to optimize canvas operations.
