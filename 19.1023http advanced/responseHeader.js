const http = require('http');
http.createServer(function(req,res){
   // res.writeHead(200,{"Content-Type":"text/html"});
    /**响应内容的字节长度*/
 //   res.setHeader("Content-Length",10);
   // res.setHeader("Content-Encoding","gzip");
   res.setHeader("Date",(new Date()).toLocaleString());//响应时间

   res.setHeader("Set-Cookie","name=zhangsan");  
   res.end("hello node");
}).listen(8081);
console.log('server is listening 8081');