# SimpleNodeJSApp
A simple Node.js server coded in JavaScript that handles HTTP PUT requests that contain JSON data.

## Description
The application starts a Node.js server that listens for HTTP PUT requests. The PUT request should contain a JSON body so that the server can process the data. The server takes each string value it finds in the JSON data it receives, reverses the string, and then sends non-string values back with the new reversed string values.

## Technologies Used
Node.js v14.17.0

Postman for Chrome Version 5.5.5

## Running the Application
To run the application, download and install Node.js.
https://nodejs.org/en/download/

A program like Postman is needed to send the HTTP request to the server.
https://www.postman.com/downloads/

Download the three project files (index.js, hostconfig.js, and package.json) into the same directory. Open a command line in the created directory and run the following command:

```
node index.js [hostname] [port]
```

If the hostname and port arguments are omitted, then the server will start using the default hostname: '127.0.0.1' and port: '8081'. A confirmation message will be displayed confirming that the server has started.  
With the server running, use postman to send JSON requests to the server. Start Postman and set the method type to PUT. In the Postman URL field, enter the address the server was started on. The address entered should be formatted as 'hostname : port' sow when using the default hostname and port it would be '127.0.0.1:8081'.  
In the Body tab of Postman, select 'raw', and from the drop down, select 'JSON(application/json'). In the code field, enter in a properly formatted JSON string and then click send. The server will return the JSON data back with each of the string values reversed.

Sent JSON data:

```
{
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a"
}
```
Received JSON data:

```
{
    "aliceblue": "ff8f0f#",
    "antiquewhite": "7dbeaf#",
    "aqua": "ffff00#",
    "aquamarine": "4dfff7#",
    "azure": "ffff0f#",
    "beige": "cd5f5f#",
    "bisque": "4c4eff#",
    "black": "000000#",
    "blanchedalmond": "dcbeff#",
    "blue": "ff0000#",
    "blueviolet": "2eb2a8#",
    "brown": "a2a25a#"
}
```
