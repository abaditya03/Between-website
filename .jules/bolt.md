## 2023-10-25 - Particle Self-Comparison
**Learning:** Starting a reciprocal particle pair loop at j=i causes N zero-length canvas draw calls per frame because dist=0 always satisfies distance thresholds.
**Action:** Always start reciprocal loops at j=i+1 to skip self-comparisons.
