## 2024-10-24 - Canvas Zero-Length Draw Calls
**Learning:** Initializing an inner collision loop at `j = i` instead of `j = i + 1` in canvas particle networks not only does redundant distance calculations, but it also triggers invisible zero-length draw calls (`lineTo` to same coordinates) that consume rendering resources without visual impact.
**Action:** Always start nested comparison loops at `j = i + 1` in particle networks to skip self-comparisons and prevent phantom canvas operations.
