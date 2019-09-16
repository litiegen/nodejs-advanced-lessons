/**
 * 流是一种数据的传输方式
 * 可以将数据从一个地方传输到另一个地方
 */
const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer(function(req,res){
    //可读流
    var filePath = path.join(__dirname,"/stream.txt")
    var streamReader = fs.createReadStream(filePath);
    res.writeHead(200,{
        'Content-Type': 'text/plain;charset=utf-8'
    })
    streamReader.pipe(res);
}).listen(8081);

console.log("server is listening 8081");