const http = require("http");
const querystring = require("querystring");//将对象转换为服务器可以接收的
var infor = {"user":"zhangsan"};
var str = querystring.stringify(infor);

var options = {
    host:"localhost",
    port:8080,
    path:"/",
    method:"post"
}
var req = http.request(options,function(res){

});

req.write(str);
req.end();