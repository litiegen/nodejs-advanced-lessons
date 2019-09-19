const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer(function(req,res){
    //可读流
    var filePath = path.join(__dirname,"/data.txt")
    var streamReader = fs.createReadStream(filePath);
    res.writeHead(200,{
        'Content-Type': 'text/plain;charset=utf-8'
    })
    streamReader.pipe(res);
}).listen(8081);

console.log("server is listening 8081");