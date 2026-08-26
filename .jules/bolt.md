## 2025-01-15 - Redundant Canvas Draw Calls on Self-Comparison
**Learning:** In the canvas particle network, iterating the inner distance check starting at `j = i` triggers N unexpected zero-length `stroke()` draw calls per frame because a particle's distance to itself is `0`, satisfying the `< 120` condition.
**Action:** Initialize nested pair-matching loops at `j = i + 1` to skip self-comparisons entirely, averting zero-length artifact draws and wasted operations.
