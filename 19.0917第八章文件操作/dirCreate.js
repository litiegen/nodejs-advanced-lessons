const fs = require("fs");
const path = require("path");
//fs.mkdirSync("hello");//添加文件夹
var list = fs.readdirSync(__dirname);
console.log(list);
// var files = fs.readdirSync(path.join(__dirname,"/hello"));//删除文件夹

// fs.unlinkSync(path.join(__dirname,"/hello/"+files[0]));

// fs.rmdirSync(path.join(__dirname,"/hello"));
