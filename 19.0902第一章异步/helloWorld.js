const http = require("http");

http.createServer(function(req,res){
    /**
     * http协议，协议的结构，协议的请求响应过程
     * 状态码
     */
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    console.log(res)
    //res.write("<ul><li>你好 world</li></ul>");
    //响应结束
    res.end("<h1>你好 world</h1>");
}).listen(8081);
console.log("server is listening 8081");
/**
 * 1.Shft + 鼠标右键 点击打开power shell窗口
 * 2.编译node.js文件 node + 文件名
 * 3.每次修改了js文件之后，需要重新执行 node + 文件名
 * 4.在node中的js文件，必须得编译才能执行
 * 5.WebStorm
 */