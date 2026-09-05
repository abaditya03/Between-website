## 2024-05-18 - Isolated High-Frequency State Updates
**Learning:** High-frequency state updates like `useScrollParallax` in `index.html` can force the entire unmemoized `App` component to unnecessarily re-render on events like scrolling.
**Action:** Isolate high-frequency state updates into specialized wrapper components (e.g., `HeroParallax`) to prevent full-app re-renders.
