const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

const isUsingScrollParallaxApp = content.includes('const scrollY = useScrollParallax();');

if (isUsingScrollParallaxApp) {
  console.log("App component uses scrollY which forces entire app re-render on scroll.");
}
