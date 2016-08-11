var fs = require('fs');

var text = fs.readFileSync('fsfile01.txt','utf8');
console.log(text);