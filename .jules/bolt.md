## 2024-05-18 - [Zero-Length Canvas Draws]
**Learning:** Initializing nested particle loops at `j = i` instead of `j = i + 1` causes redundant self-comparisons where `dist = 0`, triggering unexpected zero-length canvas draw calls for every particle every frame.
**Action:** Always initialize reciprocal comparison inner loops at `j = i + 1` to prevent redundant logic and zero-length canvas rendering.
