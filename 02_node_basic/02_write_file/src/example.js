const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist/test.txt');
fs.writeFileSync(distPath, 'hello node.js');

// fs.writeFileSync(__dirname + '/test.txt', 'hello node.js');