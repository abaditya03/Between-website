## 2024-05-18 - Canvas Animation Overhead
**Learning:** The background canvas particle animation performed redundant O(N^2) inner loop comparisons starting at `j = i` instead of `j = i + 1`. This caused N self-comparisons and 100 zero-length draw calls per frame since `dist < 120` evaluates to true when distance is 0. Additionally, expensive `Math.sqrt()` was called for every pair before checking range.
**Action:** Always start nested array combination loops at `j = i + 1` to avoid self-comparisons, and use squared distances (`distSq`) to defer `Math.sqrt()` until absolutely necessary.
