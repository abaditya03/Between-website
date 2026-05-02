## 2024-05-02 - Particle Network Math Optimization
**Learning:** Canvas-based interactive particle systems in tight `requestAnimationFrame` loops suffer greatly from evaluating `Math.sqrt()` on every single N*N frame loop. Even small 70x70 loops evaluate 4900 square roots a frame.
**Action:** Use squared distances `distSq < maxDist * maxDist` to branch logic before calling `Math.sqrt()`, and start inner loop iterators at `j = i + 1` to halve comparisons and avoid `j=i` redundant pathing.
