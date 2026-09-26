## 2024-05-24 - Canvas Particle Animation Optimization
**Learning:** Found a common performance trap in canvas particle networks: nested loops initializing at `j = i` instead of `j = i + 1` causing zero-length self-draws, and computing `Math.sqrt` for every single pair comparison regardless of distance.
**Action:** When reviewing physics or particle animations, always verify that inner collision/distance loops start at `j = i + 1` and use squared distance bounds (`distSq < maxDist * maxDist`) before applying `Math.sqrt`.
