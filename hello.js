// create Node.js file name hello.js

// importing the built-in HTTP module
var http = require('http');

// creating an HTTP server using the createServer method
http.createServer(function (req, res){

    // setting the response header to indicate the content type as HTML
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // sending the response body with the message "Hello World!"
    res.end('Hello World!');

}).listen(8080); // listening on port 8080 for incoming requests
