## 2025-05-15 - React Component Re-render Optimization
**Learning:** High-frequency state updates like `scrollY` in a top-level unmemoized React component will force the entire component tree to re-render constantly.
**Action:** Always isolate high-frequency state updates into specialized wrapper components (e.g., `HeroParallax`) to prevent unnecessary full-app re-renders, especially on scroll or mouse move events.
