## 2024-05-30 - O(N^2) Canvas Loop Optimization
**Learning:** Found a classic O(N^2) loop calculating particle distances in a canvas animation. The original loop initialized the inner iterator at `j = i`, causing it to unnecessarily calculate the distance of a particle against itself (yielding 0) and evaluating a redundant drawing condition `N` times per frame.
**Action:** Always verify inner loop starting conditions in O(N^2) spatial algorithms. Starting at `j = i + 1` mathematically eliminates these redundant self-comparisons and halves the necessary calculations without visual change.
