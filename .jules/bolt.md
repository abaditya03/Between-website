## 2024-05-15 - Isolate high-frequency state updates
**Learning:** High-frequency state updates like `useScrollParallax` at the root component level force the entire unmemoized application to unnecessarily re-render on every scroll event.
**Action:** Isolate high-frequency state updates into specialized wrapper components (like `HeroParallax`) to prevent forcing the entire unmemoized `App` component to unnecessarily re-render on events like scrolling.
