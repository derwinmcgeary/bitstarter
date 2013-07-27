var express = require('express');
var fs = require('fs');
var HOMEPAGE = 'index.html';
process.env.PWD = process.cwd()

var app = express.createServer(express.logger());
app.use(express.static(process.env.PWD + '/'));
/* app.get('/', function(request, response) {
	console.log(request);
  response.send(fs.readFileSync(HOMEPAGE).toString('utf-8'));
});
*/
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
