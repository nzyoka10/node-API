## Nodejs Tutorial

``Node.js uses asynchronous programming!``
- What is Node.js?
- Node.js is an open source server environment.
- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- Node.js uses JavaScript on the server

```bash
Notes
- A common task for a web server can be to open a file on the server and return the content to the client.

- Here is how PHP or ASP handles a file request:
    - Sends the task to the computer's file system.
    - Waits while the file system opens and reads the file.
    - Returns the content to the client.
    - Ready to handle the next request.

- Here is how Node.js handles a file request:
    - Sends the task to the computer's file system.
    - Ready to handle the next request.
    - When the file system has opened and read the file, the server returns the content to the client.

- Node.js eliminates the waiting, and simply continues with the next request.
- Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.
```

### What can Node.js do?
- It can generate dynamic page content.
- It can create, open, read, write, delete and close files on the server.
- It can collect form data.
- It can add, delete, modify data in database.

### What is a Node.js file?
- It's files contain tasks that will be executed on certain events.
- A typical event is a user trying to access a port on the server.
- Node.js files must be initiated on the server before having any effect
- Node.js files have extension ``.js``

## Node.js Modules
- What is a Module in ``Node.js``?
    -  In Node.js, a module is like a toolbox that contains specific tools ``(functions, variables, or objects)`` related to a particular task or feature. 
    - Just like you'd organize your tools in a toolbox for easy access and reuse, 
        - Node.js modules help organize your code into smaller, 
        - manageable units. 
    - This makes your code easier to understand, maintain, and share with others. 
    - Modules in Node.js allow you to import and export functionality, so you can use them wherever you need in your code.

###### Built-in Modules
- Node.js has a set of built-in modules which can be used without any installtions.
- Examples are:
    - ``Include Modules``: To include a module, use the **require()** fucntion with module name.
    ```JavaScript

        var http = require('http');
    ```
    - Now the application has access to ``HTTP`` module, and is able to create a server.

    ```JavaScript

        http.createServer(function (req, res){
            // Handle requests here...
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('Hello World, Node.js id Fun!');
        }).listen(8080);
    ```
##### Creating own Modules

- You can create your own modules, and easily include them in your applications.
- The following example creates a module that returns a date and time object:

```JavaScript

    exports.myDateTime = function () {
        return new Date();
    }
```
- Use the ``exports`` keyword to make properties and methods availabe outside the module file.
- Include this custom module using ``require()`` function.

## Node.js HTTP Module
- The Built-in HTTP Module
    - Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
``var http = require('http');``

- *Node.js as a Web Server*
    - The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
    - Use the ``createServer()`` method to create an HTTP server.
    - Pass it a callback function that gets called

    ```JavaScript
        var http = require('http');

        //create a server object:
        http.createServer(function (req, res) {

            //write a response to the client
            res.write('Hello World!'); 
           
            //end the response
            res.end();

        }).listen(8080); //the server object listens on port 8080
    ```
- Add an Http header
    - If the response from the HTTP server is supposed to be displayed as HTML, you should include an *HTTP* header with the correct content type.

    ```JavaScript

        var httpd = require('http');
        
        http.createServer(function (req, res) {

            // header
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello JavaScript!');
            res.end();
        }).listen(8080);
    ```
- Read the Query String
    - The function passed into the http.createServer() has a req argument that represents the request from the client, 
        - ``as an object (http.IncomingMessage object)``.
    - This object has a property called "url" which holds the part of the url that comes after the domain name.

    ```JavaScript

        var http = require('http');

        http.createServer(function, (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(req.url);
            res.end();
        }).listen(8080);

    ```
- Split the Query String
    - There are built-in modules to easily split the query string into readable parts, such as the URL module.

    ```JavaScript
        var http = require('http');
        var url = require('url');

        http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query; 
        var txt = q.year + " " + q.month;
        res.end(txt);
        }).listen(8080);
    ```
#### Node.js File system module
- Node.js as a File Server
    - The Node.js file system module allows you to work with the file system on your computer.
    - To include the File System module, use the require() method:

    ```JavaScript
        var fs = require('fs');
    ```
- Common use for the File System module:
    - Read files
    - Create files
    - Update files
    - Delete files
    - Rename files

### Read Files using Node.js
- The ``fs.readFile()`` method is used to read files on your computer.
- Assume we have the following HTML file (located in the same folder as Node.js):
``demo_file_1.html``
```bash
    <html>
        <body>
            <h1>My Header</h1>
            <p>My paragraph.</p>
        </body>
    </html>
```
- Create a Node.js file that reads the HTML file, and return the content:

```JavaScript
    var http = require('http');

    var fs = require('fs');

    http.createServer(function (req, res) {

        fs.readFile('demo_file_1.html', function(err, data) {

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    }).listen(8080);
```

### Create Files using Node.js
- The File System module has methods for creating new files:
```bash
    fs.appendFile()
    fs.open()
    fs.writeFile()
```
- The fs.appendFile() method appends specified content to a file. 
- If the file does not exist, the file will be created:

```bash
    var fs = require('fs');

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {

    if (err) throw err;
        console.log('Saved!');
    });
```

- The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

**Example below**
```JavaScript
    var fs = require('fs');

    fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
    });
```

### Update a File using Node.js
The File System module has methods for updating files:
```bash
    fs.appendFile()
    fs.writeFile()
```
- The fs.appendFile() method appends the specified content at the end of the specified file:

**Example**
```JavaScript
    var fs = require('fs');

    fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
    });
```

### Node.js URL Module
- The **URL** module splits up a web address into readable parts.
- **To include**, use the ``require()``
```Js
    var url = require('url');
```
- Parse an address with the ``url.parse() method``, and it will return a URL object with each part of the address as properties:

```Js
    var url = require('url');
    var adr = 'http://localhost:8080/default.htm?year=2024&month=october';
    var q = url.parse(adr, true);

    console.log(q.host); //returns 'localhost:8080'
    console.log(q.pathname); //returns '/default.htm'
    console.log(q.search); //returns '?year=2024&month=february'

    var qdata = q.query; //returns an object: { year: 2024, month: 'february' }
    console.log(qdata.month); //returns 'october'
```
