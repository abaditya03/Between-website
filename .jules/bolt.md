## 2024-08-16 - Zero-length Canvas Draw Calls in Particle Networks
**Learning:** Initializing the inner loop at `j = i` in a distance-based particle network leads to an unintended 0-distance self-comparison, which triggers a 0-length canvas draw call because `dist = 0` satisfies the threshold, creating redundant rendering overhead.
**Action:** When calculating interactions between particles where reciprocal pairs are already skipped, initialize the inner loop at `j = i + 1` instead to skip self-comparisons.
