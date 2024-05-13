// Importing the built-in File System module
var fs = require('fs');

// Writing content to a file asynchronously using writeFile method
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  // Checking for errors during file writing
  if (err) throw err;
  
  // Logging a message to indicate successful replacement of file content
  console.log('Replaced!');
});
