const { performance } = require('perf_hooks');

class MockCtx {
  beginPath() {}
  moveTo() {}
  lineTo() {}
  stroke() {
    // Add artificial delay to mock realistic canvas rendering time
    let waste = 0;
    for(let i=0; i<100; i++) waste += Math.random();
    this.strokes++;
  }
  constructor() { this.strokes = 0; }
}
const ctx = new MockCtx();

const particles = Array.from({length: 100}, () => ({x: Math.random()*1000, y: Math.random()*1000}));

function testOld() {
  ctx.strokes = 0;
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
  return ctx.strokes;
}

function testNew() {
  ctx.strokes = 0;
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
  return ctx.strokes;
}

const startOld = performance.now();
for(let k=0; k<1000; k++) testOld();
const endOld = performance.now();

const startNew = performance.now();
for(let k=0; k<1000; k++) testNew();
const endNew = performance.now();

console.log(`Old time: ${(endOld - startOld).toFixed(2)}ms, Old strokes per frame: ${testOld()}`);
console.log(`New time: ${(endNew - startNew).toFixed(2)}ms, New strokes per frame: ${testNew()}`);
