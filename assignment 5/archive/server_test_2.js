var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

const hostname = '127.0.0.1';
var port = 8000;

console.log('Starting server on port ' + port);

const server = http.createServer(function (req, res) {
    if(url.parse(req.url, true).pathname == '/') {
        req.url = 'C:/Users/Ewan/Desktop/IpadShare/CS-290/assignment 5/naruto_fillers.html';
    }
    res.statusCode = 200;
    res.setHeader('Content_Type', 'text/html');
    res.open('C:/Users/Ewan/Desktop/IpadShare/CS-290/assignment 5/naruto_fillers.html');
    res.end();
});

server.listen(port, hostname)