## 2024-03-22 - Optimize ParticleNetwork Canvas Animation
**Learning:** The live ambient background canvas particle animation runs an O(N^2) nested loop checking distance between every pair of particles. It was starting the inner loop at `j = i` (causing zero-distance self-comparisons) and calculating `Math.sqrt()` before filtering out particles that are too far apart.
**Action:** Always start inner loops for unique pair comparisons at `j = i + 1`, and use squared distance `distSq` to filter out pairs before applying the expensive `Math.sqrt()` operation.
