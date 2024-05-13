
// reading a file

// Importing the built-in HTTP module
var http = require('http');

// Importing the built-in File System module
var fs = require('fs');

// Creating an HTTP server using the createServer method
http.createServer(function (req, res) {

  // Reading the content of the 'demo_file_1.html' file asynchronously
  fs.readFile('demo_file_1.html', function(err, data) {

    // Setting the HTTP header to specify the content type as HTML
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Writing the content of the file to the response
    res.write(data);
    
    // Ending the response
    return res.end();
  });

}).listen(8080); // Listening on port 8080 for incoming requests
