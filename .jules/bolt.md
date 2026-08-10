## 2026-08-10 - Hidden Zero-Length Draw Calls
**Learning:** Initializing nested particle loops at `j = i` instead of `j = i + 1` causes redundant distance calculations and unexpected zero-length canvas draw calls when `dist = 0` satisfies distance thresholds.
**Action:** Always initialize inner loops comparing unique particle pairs at `j = i + 1` to skip self-comparisons.
