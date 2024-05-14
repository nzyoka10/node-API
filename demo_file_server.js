//* file_server.js
//~ Create a Node.js file that opens the requested file and returns the 
//~ content to the client. If anything goes wrong, throw a 404 error:

// Importing the built-in HTTP module
var http = require('http');

// Importing the built-in URL module
var url = require('url');

// Importing the built-in File System module
var fs = require('fs');

// Creating an HTTP server using the createServer method
http.createServer(function (req, res) {

  // Parsing the URL to extract the pathname
  var q = url.parse(req.url, true);
  
  // Constructing the filename by prepending a dot to the pathname
  var filename = "." + q.pathname;
  
  // Reading the content of the requested file asynchronously
  fs.readFile(filename, function(err, data) {
    
    if (err) {
      // Handling file not found error
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    // Sending the file content as the response
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); // Listening on port 8080 for incoming requests
