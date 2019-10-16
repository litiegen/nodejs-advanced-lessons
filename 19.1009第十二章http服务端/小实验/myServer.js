const http = require("http");

http.createServer(function(req,res){
    var strData = "";
    req.on("data",function(chunk){
        strData += chunk;
    })
    req.on("end",function(){
        console.log(strData);
    })
}).listen(8000);
console.log("server is listening 8000");