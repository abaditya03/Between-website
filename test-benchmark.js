const { performance } = require('perf_hooks');

class MockCtx {
  constructor() {
    this.strokeCalls = 0;
  }
  beginPath() {}
  moveTo() {}
  lineTo() {}
  stroke() { this.strokeCalls++; }
}

const particles = Array.from({ length: 70 }, () => ({
  x: Math.random() * 1000,
  y: Math.random() * 1000
}));

function testBaseline() {
  const ctx = new MockCtx();
  const start = performance.now();
  for(let iter=0; iter<1000; iter++) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  const end = performance.now();
  return { time: end - start, strokes: ctx.strokeCalls };
}

function testOptimized() {
  const ctx = new MockCtx();
  const start = performance.now();
  for(let iter=0; iter<1000; iter++) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  const end = performance.now();
  return { time: end - start, strokes: ctx.strokeCalls };
}

const baseline = testBaseline();
const optimized = testOptimized();
console.log(`Baseline: ${baseline.time.toFixed(2)}ms, Strokes: ${baseline.strokes}`);
console.log(`Optimized: ${optimized.time.toFixed(2)}ms, Strokes: ${optimized.strokes}`);
