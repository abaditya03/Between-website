const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

const searchApp = "export default function App() {";
if (code.includes(searchApp)) {
  console.log("App component found.");
}

const usesScrollParallax = "const scrollY = useScrollParallax();";
if (code.includes(usesScrollParallax)) {
  console.log("usesScrollParallax found.");
}
