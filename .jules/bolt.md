## 2024-05-24 - Inner loop particle comparison
**Learning:** In the `ParticleNetwork` component in `index.html`, the inner loop comparing particles starts at `j = i`. This means it does N redundant calculations per frame compared to starting at `j = i + 1`, and it also compares the particle to itself (distance 0). A benchmark script confirmed that starting the inner loop at `j = i + 1` decreases the execution time significantly from ~300ms to ~40ms for 6000 frames.
**Action:** Always verify inner loop initialization index for distance calculations.
