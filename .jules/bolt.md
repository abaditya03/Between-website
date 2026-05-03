## 2026-05-03 - Optimize Distance Calculations in High-Frequency Loops
**Learning:** In high-frequency loops (like animation frames) for particle networks, computing Euclidean distance with `Math.sqrt` for every pair is a major bottleneck. Furthermore, comparing self pairs or duplicate pairs wastes cycles.
**Action:** Always start inner interaction loops with `j = i + 1` to prevent self-comparison and duplicate checks, and compare squared distances (e.g., `dx*dx + dy*dy < 14400`) first before making the expensive `Math.sqrt` call.
