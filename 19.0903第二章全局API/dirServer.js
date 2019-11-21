//1.引入http模块
const http = require("http");
const fs = require("fs");//进行文件操作
const url = require("url");
const path = require("path");
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    //res.end("接收到客户端请求");
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    if(urlPathName == "/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/qq"){
        var htmlPath = __dirname + "\\view\\index.html"; 
        var htmlContent = fs.readFileSync(htmlPath);//读取文件中代码
        htmlContent = htmlContent.toString("utf8")

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
    else if(urlPathName == "/js/index.js"){
        var jsPath = path.join(__dirname,"/js/index.js");
        var jsContent = fs.readFileSync(jsPath);
        console.log(jsContent);
    }
    //console.log(urlObj);
    //console.log(urlPathName);
    //console.log(htmlContent);
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");