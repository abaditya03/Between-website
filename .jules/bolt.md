
## 2024-05-18 - Particle Network Loop Optimization
**Learning:** When calculating interactions between particles, initializing the inner loop at `j = i + 1` instead of `j = i` skips reciprocal pairs and self-comparisons. In Javascript canvas rendering, preventing self-comparison is critical as distance 0 triggers a zero-length path draw, adding unnecessary draw calls to the context queue.
**Action:** Always verify nested loop bounds when performing combinatorial particle calculations to avoid N redundant operations and unintended draw calls per frame.
