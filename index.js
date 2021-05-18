const { Console } = require("console");
const http = require("http");
const hostconfig = require("./hostconfig");

var myArgs = process.argv.slice(2);

var hostname = hostconfig.setServerHostname(myArgs);
var port = hostconfig.setServerPort(myArgs);


var server = http.createServer(function(request, response) {
    
    console.log(server.address());
    // The only request method being handled is PUT
    if(request.method == 'PUT') {
        var putJSON = ''; 

        request.on('data', function(chunk) {
            putJSON += chunk;
        });

        request.on('end', function() {
            try {
                var jsonReversed = JSON.parse(putJSON, (key, value) => {
                    // Values of type string will be reversed, but all other values need to be returned as well or they will be omitted from jsonReversed.
                    if(typeof value === 'string') {
                        // This is what's causing string values to become reversed.
                        return value.split("").reverse().join("");
                    }
                    else {
                        return value;
                    }
                });
                response.setHeader('Content-Type', 'application/json');
                response.end(JSON.stringify(jsonReversed));
            }
            catch(e) {
                console.log(e);
            }

        });
    }
}).listen(port, hostname);

server.on('error', function(e) {
    console.log("The nodejs server could not be created\n");
    console.log(e);
    server.close();
});

console.log(`Server running at http://${hostname}:${port}/\n`);

