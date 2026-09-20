## 2024-10-24 - [React Root Re-renders]
**Learning:** High-frequency state updates like useScrollParallax at the root level of a pure functional React app forces the entire tree to unnecessarily re-render on every scroll event.
**Action:** Isolate high-frequency state updates into specialized wrapper components (e.g., HeroParallax) to prevent full-app re-renders.
