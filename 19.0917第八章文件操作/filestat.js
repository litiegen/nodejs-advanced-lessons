const fs = require("fs");
const path = require("path");

// var list = fs.readdirSync(__dirname);
// console.log(list);
// var filePath = path.join(__dirname,"file.txt");
// var statObj = fs.statSync(filePath);
// console.log(statObj.size);

var fpath = process.argv[1].toString();
var filePath = fpath.replace(/filestat.js/,'');
var fileList = [];
for(var i = 0;i<fs.readdirSync(filePath).length;i++){
    var fileObj = {};
    var fileSize = 0;
    fileObj["fileName"] = fs.readdirSync(filePath)[i];
    fileSize = fs.statSync('./'+fileObj["fileName"]).size;
    fileObj["fileSize"] = fileSize;
    fileList.push(fileObj);
}
console.log(fileList);