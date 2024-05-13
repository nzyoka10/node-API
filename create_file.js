// Importing the built-in File System module
var fs = require('fs');

// Writing content to a file asynchronously using writeFile method
fs.writeFile('my_new_file.txt', 'Hello content!......', function (err) {

  // Checking for errors during file writing
  if (err) throw err;
  
  // Logging a message to indicate successful file writing
  console.log('Saved!');
});
