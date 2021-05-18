const defaultHostname = '127.0.0.1';
const defaultPort = 8081;

// Retrieves a usable hostname from the command line args.
// If a proper hostname was not entered in the command line, the default hostname is used.
exports.setServerHostname = function(userArgs) {
    var useDefaultHostname = true;

    if(userArgs.length >= 1) {
        var potentialHostname = userArgs[0].split('.');
        
        if(potentialHostname.length == 4) {
            var issueWithHostnameFound = false;
            for(var i = 0; i < potentialHostname.length; i++) {
                if(!isNaN(potentialHostname[i])) {
                    var ipBlock = parseInt(potentialHostname[i]);
                    if(ipBlock < 0 || ipBlock > 255) {
                        issueWithHostnameFound = true;
                    }
                }
                else {
                    issueWithHostnameFound = true;
                }
            }

            if(!issueWithHostnameFound) {
                useDefaultHostname = false;
            }
        }
    }

    return (useDefaultHostname ? defaultHostname : userArgs[0]);
}

// Retrieves a usable port from the command line args.
// If a proper port was not entered in the command line, the default port is used.
exports.setServerPort = function(userArgs) {
    var currentPort = defaultPort;

    if(userArgs.length >= 2 && !isNaN(userArgs[1])) {
        var potentialPort = parseInt(userArgs[1]);
        // The potentialPort is only used if its inside the acceptable range of port values (0 - 65535).
        if(potentialPort >= 0 && potentialPort <= 65535) {
            currentPort = potentialPort;
        }
    }
    return currentPort;
}