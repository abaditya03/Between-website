## 2024-05-24 - [Zero-Length Canvas Draw Call Prevention]
**Learning:** Initializing self-comparing loops (e.g. j=i instead of j=i+1) in distance-checking algorithms causes redundant zero-length canvas draw calls because the distance is exactly 0, which unconditionally satisfies any distance threshold check.
**Action:** Always start inner O(N^2) reciprocal comparison loops at j = i + 1 to avoid unnecessary zero-length draw calls.
