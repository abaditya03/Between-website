## 2024-05-24 - Top-Level Scroll Listener Bottleneck
**Learning:** The entire application (all heavy UI components) was wired to re-render on every scroll event because `useScrollParallax` was placed inside the root `App` component without memoization.
**Action:** Isolate high-frequency state updates (like scroll positions) into specialized leaf wrapper components (e.g., `HeroParallax`) to prevent unnecessary full-tree reconciliation.
