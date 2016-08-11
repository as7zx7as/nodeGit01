var url = require('url');

var parseUrl = url.parse("https://nodejs.org?test=hi&tmp=hello&key=bye");
console.log(parseUrl);