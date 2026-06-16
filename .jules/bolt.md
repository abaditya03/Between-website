
## 2024-05-14 - Redundant Draw Calls in Particle Networks
**Learning:** In particle network calculations, if reciprocal pairs are already skipped (`j = i`), initializing the inner loop at `j = i` still results in a redundant self-comparison where `dist = 0`. Because `dist < 120` is satisfied, this triggers a zero-length canvas draw call (`moveTo` and `lineTo` the same coordinates) for every particle, every frame.
**Action:** Always start inner loops at `j = i + 1` for n-body distance calculations to avoid N redundant calculations and 0-length draw calls per frame.

## 2024-05-14 - High Frequency Events Blocking Thread
**Learning:** `mousemove` and `resize` events are extremely high-frequency and can cause jank on scrolling/interaction if they aren't marked as passive. Object allocation in micro-benchmarks might mistakenly show `{ passive: true }` as slower in V8, but in real browser environments, it significantly improves interaction responsiveness.
**Action:** Always add `{ passive: true }` to `resize`, `scroll`, `mousemove` and `touch` events that don't need to `preventDefault()`.
