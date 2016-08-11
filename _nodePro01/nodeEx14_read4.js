var fs = require('fs');

try {
	var text = fs.readFileSync('fsfile012.txt','utf8');
} catch (e) {
//	console.log(e.toString());
	console.log("error");
}

//console.log(text);

//setTimeout(function(){
//	console.log(text);
//},1000)