var hostname = '127.0.0.1';
var port = 8081;

const console = require("console");
const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(port, hostname);



console.log(`Server running at http://${hostname}:${port}/`);