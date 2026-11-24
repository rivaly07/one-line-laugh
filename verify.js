const fs = require('fs');
const path = require('path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputFile = path.join(outputDir, 'entry.txt');

if (!fs.existsSync(outputFile)) {
  console.error('FAIL: entry.txt not found');
  process.exit(1);
}

const content = fs.readFileSync(outputFile, 'utf8');
const byteLength = Buffer.byteLength(content, 'utf8');

if (byteLength < 1) {
  console.error('FAIL: entry.txt is empty (0 bytes)');
  process.exit(1);
}

if (byteLength > 200) {
  console.error(`FAIL: entry.txt exceeds 200 bytes (${byteLength})`);
  process.exit(1);
}

if (!content.trim()) {
  console.error('FAIL: entry.txt contains only whitespace');
  process.exit(1);
}

try {
  Buffer.from(content, 'utf8').toString('utf8');
} catch (e) {
  console.error('FAIL: entry.txt is not valid UTF-8');
  process.exit(1);
}

console.log('OK: entry.txt passes all gates');
console.log(`Length: ${byteLength} bytes`);
console.log(`Content: "${content}"`);