// Importing the built-in HTTP module
var http = require('http');

// Creating an HTTP server using the createServer method
http.createServer(function (req, res) {

    // Adding an HTTP header to the response to specify the content type as HTML
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // Writing the response body with the message "Hello World!"
    //   res.write('Hello World!');

    // Writing the request URL as the response body
    res.write(req.url);

    // Ending the response
    res.end();
}).listen(8080); // Listening on port 8080 for incoming requests