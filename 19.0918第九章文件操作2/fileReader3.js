const http = require("http");
const path = require("path");
const fs = require("fs");


console.log("请输入");
process.stdin.on("data",function(data){
    var cmd = data.toString();
    var cmdArr = cmd.split(" ");
    switch(cmdArr[0]){
        case "mkdr":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            break;
        case "touch":
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello node");
            break;
        case "delete":
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
            break;
        default:
            console.log("something erro");
            break;
    }
})