## 2024-05-24 - Initial Journal
**Learning:** Initialized Bolt journal.
**Action:** Always document critical learnings here.

## 2024-05-24 - Isolated High-Frequency State Updates
**Learning:** High-frequency state updates like `useScrollParallax` in `index.html` force the entire unmemoized `App` component to unnecessarily re-render on scroll events.
**Action:** Isolate such high-frequency state updates into specialized wrapper components (e.g., `HeroParallax`) to prevent full-app re-renders.
