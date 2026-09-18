## 2025-02-18 - [Extracting High-Frequency State in React]
**Learning:** Placing high-frequency event listeners (like scroll position trackers) inside a top-level unmemoized root component forces the entire component tree to re-render synchronously with the event loop, causing severe main thread blocking.
**Action:** Always isolate high-frequency state updates into leaf components or specialized wrapper components (like `HeroParallax`) to prevent unnecessary full-app re-renders.
