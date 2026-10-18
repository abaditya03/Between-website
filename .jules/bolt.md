## 2026-04-20 - [Redundant O(N^2) Canvas Loop]
**Learning:** Found a redundant O(N^2) canvas loop comparison in index.html where inner loop initialized at `j = i` instead of `j = i + 1`. This caused N zero-length draw calls per frame due to self-comparisons. Also, expensive Math.sqrt() was invoked before distance bounds checking.
**Action:** Always start nested loops at `j = i + 1` for particle comparisons, and use squared distance `distSq` for boundary checks before calculating exact `Math.sqrt()` values.
