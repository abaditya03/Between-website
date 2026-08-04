## 2024-08-04 - Particle Network Redundant Self-Draw
**Learning:** In the live particle network loop, inner loops starting at `j = i` (instead of `j = i + 1`) trigger self-comparisons where `dx` and `dy` are 0. Because distance `0 < 120`, this executes a zero-length canvas stroke call `ctx.lineTo()` to its own coordinates per particle, per frame.
**Action:** When implementing reciprocal N-body interactions, always initialize the inner loop at `j = i + 1` to skip self-comparisons, avoiding N redundant Math.sqrt calls and zero-length draw calls per frame.
