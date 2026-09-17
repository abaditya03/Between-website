## 2024-05-29 - React Hook Isolation
**Learning:** High-frequency state hooks like `useScrollParallax` at the root of a large unmemoized application component will trigger severe performance regressions by causing unnecessary re-renders of the entire app.
**Action:** Always isolate high-frequency state updates into specialized wrapper components (e.g., `HeroParallax`) to scope re-renders to only the elements that require them.
