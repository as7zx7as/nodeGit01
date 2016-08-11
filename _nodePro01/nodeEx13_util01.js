var util = require('util');

var su1 =10, su2 = 20;

var data = util.format(1,1,1);
var data2 = util.format('%d+%d=%d',su1,su2,su1+su2);

console.log(data);
console.log(data2);