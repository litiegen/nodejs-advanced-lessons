const http = require("http");

http.createServer(function(req,res){
    res.end("hello world");
}).listen(8081);
console.log("Server is listening 8081");