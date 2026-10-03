## 2024-05-18 - Canvas O(N^2) Optimization
**Learning:** Found O(N^2) canvas particle loop using expensive `Math.sqrt()` and doing self-comparisons (j=i). This causes massive unnecessary calculation on every animation frame.
**Action:** Always check loop boundaries (`j=i+1` instead of `j=i`) and use squared distance (`distSq = dx*dx + dy*dy`) before calling `Math.sqrt()` to skip expensive operations when possible.
