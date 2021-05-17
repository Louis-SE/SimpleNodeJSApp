const { Console } = require("console");
const console = require("console");
const http = require("http");

var myArgs = process.argv.slice(2);
const defaultHostname = '127.0.0.1';
const defaultPort = 8081;

var hostname = setServerHostname(myArgs);
var port = setServerPort(myArgs);


http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(port, hostname);

console.log(`Server running at http://${hostname}:${port}/`);


// Retrieves a usable hostname from the command line args.
// If a proper hostname was not entered in the command line, the default hostname is used.
function setServerHostname(userArgs) {
    if(userArgs.length >= 1) {
        console.log("Possible Hostname Detected.");
    }

    return defaultHostname;
}

// Retrieves a usable port from the command line args.
// If a proper port was not entered in the command line, the default port is used.
function setServerPort(userArgs) {
    if(userArgs.length >= 2 && typeof userArgs(2) == Number) {
        console.log("Possible Port Detected.");
    }
    
    return defaultPort;
}