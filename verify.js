const fs = require('fs');
const path = require('path');

const outputFile = '/output/entry.txt';

function verify() {
  if (!fs.existsSync(outputFile)) {
    console.error('FAIL: entry.txt does not exist');
    process.exit(1);
  }

  let content;
  try {
    content = fs.readFileSync(outputFile, 'utf8');
  } catch (e) {
    console.error('FAIL: entry.txt is not valid UTF-8');
    process.exit(1);
  }

  const length = content.length;
  if (length < 1 || length > 200) {
    console.error(`FAIL: length ${length} not in range 1-200`);
    process.exit(1);
  }

  if (!content.trim()) {
    console.error('FAIL: content is only whitespace');
    process.exit(1);
  }

  console.log('PASS: entry.txt meets all gate requirements');
  console.log(`Length: ${length} chars`);
  console.log(`Content: "${content}"`);
}

verify();