## 2026-04-16 - App Component Scroll Re-renders
**Learning:** The root `App` component uses a custom `useScrollParallax` hook that updates state on every scroll event without throttling or debouncing. This causes the entire application to re-render constantly during scrolling, creating a significant performance bottleneck.
**Action:** Isolate scroll-dependent state into a separate component (like `ParallaxHero`) so only the relevant DOM elements re-render, and implement `requestAnimationFrame` throttling in the scroll listener.
