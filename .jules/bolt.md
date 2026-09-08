## 2024-11-20 - Prevent Full App Re-renders on Scroll
**Learning:** High-frequency event hooks like useScrollParallax placed in unmemoized root components like App cause severe performance bottlenecks by triggering massive re-renders across the entire application tree.
**Action:** Always isolate state that updates on window events (scroll, mousemove) into dedicated, localized wrapper components (like HeroParallax) to prevent unneeded re-renders of unrelated components.
