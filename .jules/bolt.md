## 2024-09-28 - Optimize Canvas Particle distance calculations
**Learning:** Math.sqrt() in nested O(N^2) loops causes significant overhead. Using squared distances before sqrt computation saves thousands of expensive Math.sqrt() calls. Initializing inner loops at `j = i + 1` avoids redundant self-comparisons.
**Action:** Always check distance comparisons inside hot loops and prioritize squared threshold checks over full distance computation unless exact distance is strictly needed. Avoid duplicate iterations in N-body problems.
