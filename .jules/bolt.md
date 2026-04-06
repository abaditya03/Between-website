## 2024-04-06 - DOM Caching Micro-optimization
**Learning:** Caching `document.getElementById` and refactoring inline handlers for infrequent click events is a micro-optimization with no measurable impact on a static site, violating the "no premature optimization of cold paths" principle.
**Action:** Focus on higher-impact optimizations like image lazy loading, resource preloading, or removing unused assets instead of micro-optimizing DOM access.
## 2024-04-06 - Image Loading Optimization
**Learning:** Adding `loading="lazy"` and `decoding="async"` to heavy assets like avatars and map layers defers off-main-thread decoding and reduces initial load contention, yielding a solid performance boost for image-heavy sections.
**Action:** Always verify if images are above or below the fold. Avoid lazy-loading LCP elements, but use it generously for offscreen elements.
