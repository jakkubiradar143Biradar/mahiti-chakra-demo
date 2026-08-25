const fs = require('fs');

const svg192 = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
  <rect width="192" height="192" rx="36" fill="#f59e0b"/>
  <rect x="8" y="8" width="176" height="176" rx="30" fill="#0f172a"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="90">💛</text>
</svg>`;

const svg512 = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#f59e0b"/>
  <rect x="20" y="20" width="472" height="472" rx="80" fill="#0f172a"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-size="220">💛</text>
  <text x="50%" y="82%" dominant-baseline="middle" text-anchor="middle" font-size="36" fill="#f59e0b" font-family="sans-serif" font-weight="900">MAHITI CHAKRA</text>
</svg>`;

fs.writeFileSync('public/icon-192.png', svg192);
fs.writeFileSync('public/icon-512.png', svg512);
fs.writeFileSync('public/icon-192.svg', svg192);
fs.writeFileSync('public/icon-512.svg', svg512);

console.log('PWA icons created successfully in public/');
