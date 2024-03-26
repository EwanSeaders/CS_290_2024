
const http = require('http');
const fs = require('fs');
const { cwd } = require('process');
const path = require('path')
const port = 3000;

const server = http.createServer(function(req, res) {
    let filePath = '.' + req.url;
    
    if (filePath === './') {
        // Serve index.html if request URL is '/'
        filePath = 'naruto_fillers.html';
    }
    //sets up a dictionary to map file extensions to their respective content types
    // this allows the server to properly serve all of the files in this directory
    const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.jpg': "image/jpeg"
    };
    
    //isolate file extension and create variable that returns the content type from the above dictionary
    const extname = path.extname(filePath);
    const content_type = contentTypeMap[extname];
    console.log(req.method)
    console.log(res.data)
    
    fs.readFile(filePath, function(error, data) {
        if (error) {// basic error handling
            res.writeHead(404);
            res.write('error: file not found');
        }
        else {
            res.writeHead(200, {'Content-Type': content_type})
            res.write(data);
        }
        res.end()
    });
    // if (req.method === 'GET' && req.url === '/chat.html') {
    //     // Serve the HTML file with the chat form
    //     fs.readFile('chat.html', (err, data) => {
    //       if (err) {
    //         res.writeHead(500);
    //         res.end('Error reading file');
    //       } else {
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end()
    //       }
    //     });
    //   }
    // if (req.method === 'POST' && req.url === '/chat.html') {
    //     req.on('data', chunk => {
    //       console.log('Received message:', chunk.toString());
    //     //   res.writeHead(302, {'Location': res.url});
    //       res.writeHead(200, {'Content-Type': 'text/html'});
    //       res.end();
    //     });
    // }
});

// listens to the port
server.listen(port, function(error) {
    if (error) {
        console.log('something went wrong', error)
    }
    else {
        console.log('server is listneing on port '+ port)
    }
})