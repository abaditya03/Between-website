## 2023-10-27 - High-Frequency State Updates at Root
**Learning:** Tying scroll events (via `useScrollParallax`) directly to the root `App` component forces the entire, unmemoized application to re-render on every scroll frame.
**Action:** Isolate high-frequency state updates into leaf components (like `HeroParallax`) to prevent unnecessary full-app re-renders.
