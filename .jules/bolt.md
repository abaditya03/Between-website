## 2024-05-18 - Avoid Zero-Length Canvas Draw Calls in Particle Networks
**Learning:** In canvas-based particle networks, self-comparing items (j = i) where distance is 0 satisfies distance thresholds but results in an invisible, zero-length draw call. This wastes cycles in a hot loop (requestAnimationFrame).
**Action:** When calculating interactions where reciprocal pairs are skipped, initialize inner loop at j = i + 1.
