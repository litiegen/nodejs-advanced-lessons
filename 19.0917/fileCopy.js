const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
var filePath1 = path.join(__dirname,"/file1.txt");
var fileContent = fs.readFileSync(filePath);
var statObj = fs.statSync(filePath);
fs.writeFileSync(filePath1,fileContent.toString());
fs.chmodSync()