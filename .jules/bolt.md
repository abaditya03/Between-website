## 2024-05-19 - Isolate High-Frequency Scroll State
**Learning:** High-frequency state updates like `useScrollParallax` in unmemoized root components force the entire app to unnecessarily re-render on scroll events.
**Action:** Isolate high-frequency state updates into specialized wrapper components (e.g., `HeroParallax`) to prevent forcing the entire application to re-render.
