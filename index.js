//  deps
const http = require('http');
const fs = require('fs');
const path = require('path');

//  Run server
http.createServer(function(req, res){

    // //Set paths
    var filePath = './src' + req.url;
    
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
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.GIF':
            contentType = 'image/gif';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        case '':
            filePath = 'src/html/container.html';
            break;
    }

    //Load files here
    fs.readFile(filePath, function(err, dat){
        //404
        if(err){
            res.end();
        }
        //Path contents
        else {
            if(req.url == '/extralife')
            {
                res.writeHead(302, {'Location': 'https://www.extra-life.org/participant/Soupsu-2021'});
                res.end();
            }
            else
            {
                res.writeHead(200, {'Content-Type': contentType});
                res.write(dat, 'utf-8');
                res.end();
            }
        }
    });
    
}).listen(process.env.PORT || 8000);