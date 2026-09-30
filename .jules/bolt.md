## 2025-01-20 - Canvas Particle Distance Optimization
**Learning:** Redundant O(N^2) canvas loop comparisons that start at `j = i` perform zero-length draws on self-comparisons and invoke expensive `Math.sqrt()` unnecessarily.
**Action:** Always start nested loop at `j = i + 1` to prevent zero-length draws, and use squared distance checks (e.g., `distSq < 14400`) before invoking `Math.sqrt()` to save processing cycles.
