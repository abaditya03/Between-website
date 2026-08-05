## 2024-05-15 - Canvas Loop Self-Comparison Optimization
**Learning:** In particle network algorithms, starting the inner loop at `j = i` instead of `j = i + 1` causes N redundant zero-length draw calls per frame because the particle evaluates against itself (distance = 0), passing the distance threshold.
**Action:** Always initialize inner reciprocal loops at `j = i + 1` to skip self-comparisons and save N canvas path strokes per frame.
