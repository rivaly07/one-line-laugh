const fs = require('fs');
const path = require('path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputFile = path.join(outputDir, 'entry.txt');

// The funny line - single sentence, <= 200 chars
const line = "My password manager remembers everything — including every 'Password123' I thought was clever.";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, line, 'utf8');
console.log('Wrote:', line);
console.log('Length:', Buffer.byteLength(line, 'utf8'));