## 2024-05-24 - Zero-Length Canvas Draw Calls
**Learning:** In ParticleNetwork inner loops initialized at `j = i`, the self-comparison results in a distance of 0, which satisfies distance thresholds and leads to N useless zero-length canvas line drawing operations (beginPath, moveTo, lineTo, stroke) per frame.
**Action:** When calculating interactions between particles without reciprocal pairs, always initialize the inner loop at `j = i + 1` to skip self-comparisons and save unnecessary draw calls.
