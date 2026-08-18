## 2024-05-24 - Avoiding zero-length canvas draw calls
**Learning:** In particle network algorithms, starting the inner loop at `j = i` causes particles to be compared with themselves. Because `dist = 0` satisfies the distance threshold, this triggers an unnecessary `beginPath` and zero-length `stroke` for every single particle on every frame, which can severely impact rendering performance.
**Action:** Always initialize reciprocal comparison inner loops at `j = i + 1` to skip self-comparisons and prevent redundant drawing overhead.
