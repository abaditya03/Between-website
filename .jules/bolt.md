## 2024-05-24 - Canvas Particle Self-Comparisons
**Learning:** When calculating reciprocal particle interactions, initializing the inner loop at `j = i` rather than `j = i + 1` causes redundant self-comparisons where `dx` and `dy` are 0. If the distance threshold handles `dist < 120`, `dist = 0` will evaluate to true, triggering unintended zero-length canvas draw calls for every particle on every frame.
**Action:** Always initialize inner reciprocal loops at `j = i + 1` to skip self-comparisons and avoid N zero-length draw calls.
