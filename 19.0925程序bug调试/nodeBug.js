//va a = 1; //SyntaxError 语法错误

/**
 * ReferenceError 引用错误,
 * 在某一个位置使用未定义的变量
 */
//console.log(a);
const http = require('http')
http.createServer(function(req,res){
    res.end("hello");

}).listen(8081)

//var username  = "zhangsan";
//username();
//TypeError类型的错误
//特定方法的参数必须是特定类型的变量