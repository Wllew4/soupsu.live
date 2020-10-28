const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){

    // //Set paths
    var filePath = '.' + req.url;
    
    //Correct file types
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        case '':
            filePath = 'container.html';
            break;
    }

    //Load files here
    fs.readFile(filePath, function(err, dat){
        //404
        if(err || filePath == './index.js'){
            res.end();
        }
        //Path contents
        else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(dat, 'utf-8');
            res.end();
        }
    });
    
}).listen(process.env.PORT || 8000);