var fs = require('fs');

try {
	var data = fs.readFileSync('fsfile01.txt','utf8');
	console.log(data);
} catch (e) {
	console.log("error");
}

try{
	fs.writeFileSync('fsfile01.txt','Hello World33');
	console.log('FILE WRITE COMPLETE');
}catch(e){
	console.log(e);
}

try {
	var data = fs.readFileSync('fsfile01.txt','utf8');
	console.log(data);
} catch (e) {
	console.log("error");
}

