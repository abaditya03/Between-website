## 2024-09-19 - Isolate High-Frequency State to Prevent Full App Re-renders
**Learning:** Calling hooks that update on high-frequency events (like `useScrollParallax` on scroll) at the root level of a large React component (like `App`) causes unnecessary full-app re-renders, severely degrading performance.
**Action:** Always isolate high-frequency state into specialized wrapper components (e.g., `HeroParallaxContent`) to localize re-renders to only the elements that actually need to update.
