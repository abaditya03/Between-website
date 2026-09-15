class MockReact {
    constructor() { this.renders = 0; this.stateUpdates = 0; }
    useState(init) {
        this.stateUpdates++;
        return [init, (v) => { this.stateUpdates++; }];
    }
    useEffect(fn, deps) { fn(); }
}

const mockReact = new MockReact();

// Simulating unoptimized version
function UnoptimizedApp() {
    mockReact.renders++;
    const [scrollY, setScrollY] = mockReact.useState(0);
    // Simulate scroll event
    for(let i=0; i<100; i++) { setScrollY(i); mockReact.renders++; }
}

UnoptimizedApp();
console.log("Unoptimized total main app renders:", mockReact.renders);

const mockReact2 = new MockReact();
const mockReact3 = new MockReact();

// Simulating optimized version
function HeroParallax() {
    mockReact3.renders++;
    const [scrollY, setScrollY] = mockReact3.useState(0);
    for(let i=0; i<100; i++) { setScrollY(i); mockReact3.renders++; }
}

function OptimizedApp() {
    mockReact2.renders++; // Main app renders once
    HeroParallax(); // Wrapper renders many times
}

OptimizedApp();
console.log("Optimized total main app renders:", mockReact2.renders);
console.log("Optimized total child renders:", mockReact3.renders);
