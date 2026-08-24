## 2024-08-24 - Zero-length canvas draw calls
**Learning:** Initializing nested particle loops at `j = i` instead of `j = i + 1` not only causes N redundant zero-distance calculations but forces the Canvas API to evaluate and stroke N zero-length lines per frame.
**Action:** Always start nested reciprocal interaction loops at `j = i + 1` when particles are guaranteed to not need self-interaction evaluation.
