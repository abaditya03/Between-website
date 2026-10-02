const assert = require('assert');

function benchmarkOld() {
    let mathSqrtCalls = 0;
    const MathOriginalSqrt = Math.sqrt;
    Math.sqrt = function(n) {
        mathSqrtCalls++;
        return MathOriginalSqrt.call(Math, n);
    };

    let particles = [];
    for (let i = 0; i < 70; i++) particles.push({ x: Math.random() * 800, y: Math.random() * 600 });
    let mouse = { x: 400, y: 300 };

    // Simulate one frame
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                // draw
            }
        }
        if (mouse.x != null) {
            const dxMouse = particles[i].x - mouse.x;
            const dyMouse = particles[i].y - mouse.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            if (distMouse < 200) {
                // draw
            }
        }
    }

    Math.sqrt = MathOriginalSqrt;
    return mathSqrtCalls;
}

function benchmarkNew() {
    let mathSqrtCalls = 0;
    const MathOriginalSqrt = Math.sqrt;
    Math.sqrt = function(n) {
        mathSqrtCalls++;
        return MathOriginalSqrt.call(Math, n);
    };

    let particles = [];
    for (let i = 0; i < 70; i++) particles.push({ x: Math.random() * 800, y: Math.random() * 600 });
    let mouse = { x: 400, y: 300 };

    // Simulate one frame
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 14400) { // 120 * 120
                const dist = Math.sqrt(distSq);
                // draw
            }
        }
        if (mouse.x != null) {
            const dxMouse = particles[i].x - mouse.x;
            const dyMouse = particles[i].y - mouse.y;
            const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
            if (distMouseSq < 40000) { // 200 * 200
                const distMouse = Math.sqrt(distMouseSq);
                // draw
            }
        }
    }

    Math.sqrt = MathOriginalSqrt;
    return mathSqrtCalls;
}

console.log("Old Math.sqrt calls:", benchmarkOld());
console.log("New Math.sqrt calls:", benchmarkNew());
