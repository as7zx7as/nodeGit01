var url = require('url');
var querystring = require('querystring');

var addr = 'https://nodejs.org?test=hi&tmp=hello&key=bye';
var parseUrl = url.parse(addr);
console.log(querystring.parse(parseUrl.query));