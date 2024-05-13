// Importing the built-in HTTP module
var http = require('http');

// Importing a custom module 'my_first_module' which contains a function to get the current date and time
var dt = require('./my_first_module');

// Creating an HTTP server using the createServer method
http.createServer(function (req, res) {
    // Setting the response header to indicate the content type as HTML
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Writing the response body with the current date and time obtained from the imported module
    res.write("The date and time are currently: " + dt.myDateTime());
    
    // Ending the response
    res.end();
}).listen(8080); // Listening on port 8080 for incoming requests
