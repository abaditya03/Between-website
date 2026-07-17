
## 2024-11-20 - Isolate high-frequency state updates
**Learning:** In a single-page React app contained within an `index.html` file, placing a scroll event listener hook (like `useScrollParallax`) at the top level of the `App` component forces the entire unmemoized application tree to re-render on every pixel scrolled. This is a massive performance anti-pattern.
**Action:** Always inspect where high-frequency state updates (like scroll, mouse move) live. Isolate them by moving the state down into the smallest possible specialized wrapper components (e.g., `HeroParallax`) to prevent cascading re-renders across the rest of the application.
