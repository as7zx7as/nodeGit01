var fs = require('fs');
var tmp;

var writeReturn = fs.writeFile('fsfile02.txt','Hello World3443',function(err){
	console.log('test');
	if (err) throw err;
	  console.log('It\'s saved!');
});
console.log(writeReturn);
	
data = fs.readFile('fsFile01.txt','utf8');

fs.readFile('fsFile02.txt','utf8',function(err,data){
	if(data){
		console.log(data)
		tmp=data;
	}
	else
		console.log("error");
	});