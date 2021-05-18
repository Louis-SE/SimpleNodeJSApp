const { Console } = require("console");
const http = require("http");
const hostconfig = require("./hostconfig");

var myArgs = process.argv.slice(2);

var hostname = hostconfig.setServerHostname(myArgs);
var port = hostconfig.setServerPort(myArgs);


http.createServer(function(request, response) {

    // The only request method being handled is PUT
    if(request.method == 'PUT') {
        var putJSON = ''; 

        request.on('data', function(chunk) {
            putJSON += chunk;
        });

        request.on('end', function() {
            var jsonReversed = JSON.parse(putJSON, (key, value) => {
                if(typeof value === 'string') {
                    // Split the string into an array of seperate characters,
                    return value.split("").reverse().join("");
                }
                else {
                    return value;
                }
            });
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(jsonReversed));
        });
    }
}).listen(port, hostname);

console.log(`Server running at http://${hostname}:${port}/`);