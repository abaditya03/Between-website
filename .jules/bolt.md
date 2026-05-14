## 2026-05-14 - Optimize Distance Calculations
**Learning:** In high-frequency animation loops (like requestAnimationFrame), using `Math.sqrt` to calculate the exact distance between points can be a major computational bottleneck.
**Action:** Always optimize by comparing the squared distances first (e.g., `distSq = dx*dx + dy*dy`) and deferring the expensive `Math.sqrt(distSq)` call until the condition (e.g., interaction threshold) is met.
