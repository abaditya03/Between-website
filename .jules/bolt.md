## 2023-10-24 - Particle Network Loop Optimization
**Learning:** In canvas particle animations, starting the nested distance comparison loop at `j=i` instead of `j=i+1` results in calculating self-distance (dist=0) and performing an unnecessary zero-length line draw for every particle on every frame.
**Action:** Always start inner combination loops at `j=i+1` and use squared distance (`distSq`) checks before invoking expensive `Math.sqrt()` operations.
