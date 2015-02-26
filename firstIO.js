var fs = require('fs'); 

var filepath = process.argv[2];

var buf = fs.readFileSync(filepath);

var lines = buf.toString().split("\n");

console.log(lines.length - 1);