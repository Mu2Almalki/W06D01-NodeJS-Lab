let fs =require('fs')
const even =require('./evenNums')
const delet =require('./deleteFile')


    fs.writeFile('num.text', "Even numbers:"+ even.Num().toString() ,function(err){
        if (err) throw err;
        console.log ("success")
})

const http = require('http');


http.createServer(function(request,response) {
    
    fs.readFile("num.text", function(err , data){
        if (err) throw err;
        response.write(data);
        return response.end();
    })
    
    
}).listen(8000);
// delet.del()