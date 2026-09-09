## 2024-09-09 - Isolating Scroll State in React
**Learning:** Calling high-frequency state updates like `useScrollParallax` inside a large, unmemoized `App` component causes the entire application to unnecessarily re-render on every scroll event.
**Action:** Isolate high-frequency state updates into specialized wrapper components (e.g., `HeroParallax`) to prevent forcing full-app re-renders.
