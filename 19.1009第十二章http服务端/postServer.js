const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end(fileContent);
    }
    else if(urlObj.pathname == "/pf"){
        var dataStr = "";
        req.on("data",function(chunk){
            dataStr+=chunk;
        })
        req.on("end",function(){
            console.log(dataStr);
            var dataObj = querystring.parse(dataStr);
            console.log(dataObj);
            res.end("username:"+dataObj.username+"pwd:"+dataObj.pwd);
        })
    }
}).listen(8080);