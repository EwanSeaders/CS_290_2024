const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content_Type', 'text/html');
    res.write("<html><body><h2>Naruto server</h2></body></html>")
    res.end("<p>end</p>")
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});