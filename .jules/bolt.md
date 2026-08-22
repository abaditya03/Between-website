## 2024-05-24 - Inner loop array comparisons
**Learning:** In nested loop comparisons (e.g., `for i`, `for j`), if reciprocal pairs are irrelevant, starting the inner loop at `j = i + 1` instead of `j = i` avoids self-comparison and halves redundant interactions.
**Action:** When calculating interactions between particles, initialize the inner loop at `j = i + 1` to skip self-comparisons. This avoids N redundant zero-length canvas draw calls per frame.
