const http = require('http');

let fs = require('fs');
http.createServer(function(request,response) {
    
    response.write('Hello World!');
    response.end();
}).listen(3000);