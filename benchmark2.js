const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf-8');

const appComponentBlock = content.split('export default function App() {')[1];

if (appComponentBlock.includes('const scrollY = useScrollParallax();')) {
  console.log("App component uses scrollY which forces entire app re-render on scroll.");
} else {
  console.log("App component successfully isolated from useScrollParallax.");
}
