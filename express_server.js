var express = require('express');
var app = express();

app.get('/blocks', function(request, response) {
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	response.send(blocks);
});
app.listen(8080, function() {
	console.log('Listening port 8080');
});