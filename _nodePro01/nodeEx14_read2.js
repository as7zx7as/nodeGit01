var fs = require('fs');
var text;
fs.readFile('fsfile01.txt','utf8',function(err,data){
	if(data!=null){
		console.log(data);
		text = data;
	}
	else{
		console.log(err);
		text = data;
	}
});

console.log(text);

setTimeout(function(){
	console.log(text);
},3000)