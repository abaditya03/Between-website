class MockCtx {
  constructor() { this.strokes = 0; }
  beginPath() {}
  moveTo() {}
  lineTo() {}
  stroke() { this.strokes++; }
}
const N = 100;
const particles = Array.from({length: N}, () => ({x: Math.random()*100, y: Math.random()*100}));

function testOriginal() {
  const ctx = new MockCtx();
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) { ctx.stroke(); }
    }
  }
  return ctx.strokes;
}

function testOptimized() {
  const ctx = new MockCtx();
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) { ctx.stroke(); }
    }
  }
  return ctx.strokes;
}

const orig = testOriginal();
const opt = testOptimized();
console.log(`Original strokes: ${orig}`);
console.log(`Optimized strokes: ${opt}`);
console.log(`Saved draw calls per frame: ${orig - opt}`);
