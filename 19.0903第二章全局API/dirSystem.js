//1.引入http模块
const http = require("http");
const fs = require("fs");//进行文件操作
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var sys = process.platform;//获取到当前运行的平台，Windows或者linux或者mac
    //console.log(sys);
    var htmlPath = "";

    switch(sys){
        case "linux":
            htmlPath = __dirname + "/view/index.html";
            console.log("linux")
            break;
        case "win32":
            htmlPath = __dirname + "\\view\\index.html"; 
            console.log("win")
            break;
        default:
            console.log("unkown system");
            break;
    }

    // res.end("接收到客户端请求");
    var htmlPath = __dirname + "\\view\\index.html"; 
    var htmlContent = fs.readFileSync(htmlPath);//读取文件中代码
    htmlContent = htmlContent.toString("utf8");

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
    console.log(htmlContent);
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");