## 2024-09-14 - Isolated High-Frequency Hook State
**Learning:** In a single-file React component structure (like `index.html`), placing high-frequency state updates like `useScrollParallax` inside the root unmemoized `App` component forces the entire application to re-render on every scroll event (60 times a second), creating a massive performance bottleneck.
**Action:** Always isolate high-frequency UI updates into dedicated, smaller wrapper components (e.g., `HeroParallax`) so state changes are localized and do not trigger unnecessary top-level re-renders.
