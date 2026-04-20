## 2024-04-20 - Canvas Animation Loop Optimization
**Learning:** Optimizing canvas loop by preventing self interaction with inner loop `for(j = i + 1; j < particles.length; j++)` and using `distSq` without `Math.sqrt` to delay calculations.
**Action:** Always check canvas loops that iterate over elements, looking for interactions with oneself, or expensive computational logic like `Math.sqrt()` without doing a boundary check first.
