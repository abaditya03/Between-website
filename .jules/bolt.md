## 2024-09-27 - Particle Animation Optimization
**Learning:** In canvas particle animations, initializing the nested comparison loop at `j = i` instead of `j = i + 1` results in zero-distance self-comparisons and redundant zero-length line drawings. Using `Math.sqrt` before comparing distances is also a massive CPU drain.
**Action:** Always start nested comparison loops at `i + 1` and use squared distance checks (`dx*dx + dy*dy < threshold*threshold`) before invoking expensive operations like `Math.sqrt`.
