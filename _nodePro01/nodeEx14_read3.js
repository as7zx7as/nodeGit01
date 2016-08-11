var fs = require('fs');
var text;
fs.readFile('fsfile012.txt','utf8',function(err,data){
	if(data){
//		console.log(data);
		text = data;
	}
	else{
//		console.log(err);
		text = "no file";
	}
});

//console.log(text);

setTimeout(function(){
	console.log(text);
},1000)