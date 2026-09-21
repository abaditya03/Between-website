## 2023-11-20 - Global State Re-renders
**Learning:** High-frequency state updates like `useScrollParallax` at the top level of a large application forces the entire unmemoized component tree to re-render constantly on scroll events.
**Action:** Isolate high-frequency state into specialized, localized wrapper components (e.g., `HeroParallaxContent`) to prevent full-app re-renders, vastly improving scrolling performance.
