## 2024-05-24 - Optimize Canvas Rendering & High-Frequency Event Listeners
**Learning:** In canvas rendering loops calculating interactions between particles, initializing the inner loop at `j = i + 1` instead of `j = i` avoids self-comparisons. This saves N redundant calculations per frame and prevents unexpected zero-length draw calls when the distance is 0 and satisfies distance thresholds.
**Action:** When writing nested loops for pairwise interactions, always check if reciprocal pairs and self-comparisons can be skipped.

**Learning:** Adding `{ passive: true }` to high-frequency event listeners like `mousemove` and `resize` is a standard performance practice. It prevents blocking the main thread for `preventDefault()` checks, thereby improving interaction and scrolling responsiveness.
**Action:** Always add `{ passive: true }` to `mousemove`, `scroll`, `resize`, `touchstart`, and `touchmove` listeners unless `preventDefault()` is explicitly required.
