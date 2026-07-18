## 2024-05-24 - Zero-Length Canvas Draw Calls in Particle Networks
**Learning:** In canvas-based particle networks, self-comparing a particle (where j = i) yields a distance of 0. If this falls under the distance threshold for drawing a connecting line, the canvas context executes a zero-length draw call (moveTo and lineTo the same coordinates), wasting rendering cycles per frame.
**Action:** Always initialize inner particle comparison loops with j = i + 1 to skip self-comparisons and prevent invisible rendering overhead.
