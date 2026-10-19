## 2026-05-18 - Canvas Particle Network Bottleneck
**Learning:** The live ambient particle network has a redundant O(N^2) loop where `j` starts at `i`, causing self-comparisons and redundant full-distance calculations. Furthermore, expensive `Math.sqrt()` is called unconditionally on every pair before checking the distance threshold.
**Action:** Always start nested loop comparisons at `i + 1` to halve iterations and skip self-draws. Calculate squared distance (`distSq`) first and only call `Math.sqrt()` if `distSq < threshold^2` to avoid expensive root operations on distant pairs.
