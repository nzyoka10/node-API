// Importing the built-in HTTP module
var http = require('http');

// Importing the built-in URL module
var url = require('url');

// Creating an HTTP server using the createServer method
http.createServer(function (req, res) {
  // Adding an HTTP header to the response to specify the content type as HTML
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Parsing the query parameters from the request URL
  var q = url.parse(req.url, true).query;
  
  // Concatenating the year and month parameters into a single string
  var txt = q.year + " " + q.month;
  
  // Sending the concatenated string as the response body
  res.end(txt);
}).listen(8080); // Listening on port 8080 for incoming requests
