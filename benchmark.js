class MockCtx {
  beginPath() {}
  moveTo() {}
  lineTo() {}
  stroke() {}
}

const numParticles = 70;
const particles = Array.from({length: numParticles}, () => ({x: Math.random()*1000, y: Math.random()*1000}));
const ctx = new MockCtx();

let drawCallsOld = 0;
function testOld() {
  drawCallsOld = 0;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        if (i === j) drawCallsOld++; // Just to count the redundant ones
      }
    }
  }
}

testOld();
console.log(`Redundant draw calls per frame: ${drawCallsOld}`);
