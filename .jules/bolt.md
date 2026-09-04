## 2024-09-04 - Particle Animation Optimizations
**Learning:** In canvas rendering loops (e.g., O(N^2) particle network), calling `Math.sqrt` on every iteration and evaluating self/redundant pairs causes significant execution overhead.
**Action:** Delay expensive math functions until after distance bounding box checks by using squared distance (`distSq < r*r`). Avoid redundant pairs in combinations using `j = i + 1`.
