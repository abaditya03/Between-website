## 2026-04-25 - [Scroll Handler Optimization]
**Learning:** Found a codebase-specific architectural pattern where high-frequency state updates like scroll events (e.g. `window.scrollY`) can trigger widespread, expensive global re-renders if the state is kept inside the main entry `App` component.
**Action:** Always refactor to extract the sections that depend on high-frequency state into independent sub-components (like a dedicated `HeroParallax` component) to isolate the re-renders. Additionally, the scroll hook should throttle its updates using `window.requestAnimationFrame`.
