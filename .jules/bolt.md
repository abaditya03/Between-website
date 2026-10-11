## 2026-04-11 - Optimized Canvas Particle Distances
**Learning:** In canvas particle animations, a nested loop checking distances between all pairs using `j = i` creates redundant self-comparisons and zero-length draws, and uses expensive `Math.sqrt` calls for every pair.
**Action:** Always initialize inner loops for distance comparisons with `j = i + 1` and use squared distance (`distSq`) thresholds to skip the costly `Math.sqrt` step for out-of-range particles.
