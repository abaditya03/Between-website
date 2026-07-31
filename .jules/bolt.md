## 2024-05-24 - [Isolating High-Frequency State in React Root]
**Learning:** High-frequency state updates (like scroll events) in the root component force the entire unmemoized application tree to re-render. Isolating such state into specialized wrapper components prevents cascading renders.
**Action:** Always extract high-frequency event state from root components into dedicated wrapper components that only re-render the specifically affected UI nodes.
