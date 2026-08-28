## 2026-08-28 - Isolated High-Frequency Scroll State
**Learning:** Tying high-frequency event hooks (like scroll listeners) directly to a top-level unmemoized root component forces the entire DOM tree to needlessly recalculate on every tick, destroying scroll performance.
**Action:** Always isolate high-frequency state updates into specialized, narrowly scoped wrapper components so that only the necessary nodes re-render on events like scrolling.
