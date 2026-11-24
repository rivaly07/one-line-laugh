const fs = require('fs');
const path = require('path');

const outputDir = '/output';
const outputFile = path.join(outputDir, 'entry.txt');

const line = "My password manager remembers everything — including every 'Password123' I thought was clever.";

function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(outputFile, line, 'utf8');
  console.log('Entry written to', outputFile);
}

main();