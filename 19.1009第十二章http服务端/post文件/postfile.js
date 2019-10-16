const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("postfile.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }
    else if(urlObj.pathname == "/upload"){
        var strData = "";
        req.setEncoding("binary");
        req.on("data",function(chunk){
            strData += chunk;
        })
        req.on("end",function(){
            var dataArr = strData.split("\r\n");
            var fileData = dataArr.slice(4,dataArr.length-2);
            fileData = fileData.join("\r\n");
            var buf = Buffer.from(fileData,"binary");
            fs.writeFileSync("file.png",buf,{"encoding":"binary"});
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("提交成功")
        })
    }
}).listen(8000);
console.log("server is listening 8000");