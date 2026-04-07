const fs = require('fs');
const { JSDOM } = require('jsdom');

try {
  let html = fs.readFileSync('index.html', 'utf8');

  // Strip tailwind-config script to prevent "ReferenceError: tailwind is not defined"
  html = html.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/i, '');

  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  const document = dom.window.document;

  const mapImg = document.querySelector('img[alt="Dark abstract map texture"]');
  const avatarImg1 = document.querySelector('img[data-alt*="Portrait of a young woman"]');
  const avatarImg2 = document.querySelector('img[data-alt*="Portrait of a smiling young man"]');

  let allGood = true;

  if (mapImg && mapImg.getAttribute('loading') === 'lazy' && mapImg.getAttribute('decoding') === 'async') {
    console.log('✅ Map image optimized.');
  } else {
    console.error('❌ Map image not optimized.');
    allGood = false;
  }

  if (avatarImg1 && avatarImg1.getAttribute('loading') === 'lazy' && avatarImg1.getAttribute('decoding') === 'async') {
    console.log('✅ Avatar 1 image optimized.');
  } else {
    console.error('❌ Avatar 1 image not optimized.');
    allGood = false;
  }

  if (avatarImg2 && avatarImg2.getAttribute('loading') === 'lazy' && avatarImg2.getAttribute('decoding') === 'async') {
    console.log('✅ Avatar 2 image optimized.');
  } else {
    console.error('❌ Avatar 2 image not optimized.');
    allGood = false;
  }

  if (allGood) {
      console.log('All images optimized correctly.');
      process.exit(0);
  } else {
      console.error('Failed verification.');
      process.exit(1);
  }
} catch (err) {
  console.error('Test script error:', err);
  process.exit(1);
}
