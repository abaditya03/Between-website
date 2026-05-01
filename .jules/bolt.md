## 2024-10-27 - Particle Animation Performance
**Learning:** High-frequency render loops (like canvas animation) can be severely impacted by redundant calculations and expensive math operations. In $O(N^2)$ particle interaction loops, self-comparisons and duplicate pairs effectively double the computational workload.
**Action:** When calculating interactions between particles, always initialize the inner loop at `j = i + 1` to halve the iterations. Furthermore, optimize distance checks by comparing squared distances first, invoking `Math.sqrt` only when interaction is necessary.
