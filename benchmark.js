const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

console.log("File loaded. Checking for high-frequency state updates.");

// Mocking useScrollParallax logic
let renderCount = 0;

class App {
  constructor() {
    this.scrollY = 0;
  }

  handleScroll() {
    this.scrollY++; // Mocking scroll change
    this.render();
  }

  render() {
    renderCount++;
  }
}

const app = new App();
for(let i = 0; i < 1000; i++) {
  app.handleScroll();
}
console.log(`Render count without isolation: ${renderCount}`);

class IsolatedHeroParallax {
  constructor() {
    this.scrollY = 0;
    this.heroRenderCount = 0;
  }

  handleScroll() {
    this.scrollY++; // Mocking scroll change
    this.render();
  }

  render() {
    this.heroRenderCount++;
  }
}

let optimizedRenderCount = 0;
class OptimizedApp {
  constructor() {
    this.hero = new IsolatedHeroParallax();
  }

  handleScroll() {
     this.hero.handleScroll();
  }

  render() {
    optimizedRenderCount++;
  }
}

const optimizedApp = new OptimizedApp();
optimizedApp.render(); // App renders once
for(let i = 0; i < 1000; i++) {
  optimizedApp.handleScroll();
}

console.log(`Render count with isolated Hero: App - ${optimizedRenderCount}, Hero - ${optimizedApp.hero.heroRenderCount}`);
