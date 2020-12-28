// Dependancies
var http = require('http');
var config = require('./config');

var httpServer = http.createServer(function(req, res) {

});

httpServer.listen(config.httpPort, function() {
    console.log('The server is listening on port ' + config.httpPort);
});
