//  const http = require("http");
//  const path = require("path");
//  const fs = require("fs");
//  console.log("请输入");
//  process.stdin.on("data",function(data){
//      var cmd = data.toString();
//      var cmdArr = cmd.split(" ");
//      var ak = cmd.slice(0,-2);
//      var akk = ak.split(" ");
//      console.log(akk);
//      console.log(ak == "touch");
//      switch(ak){
//          case "mkdr":
//              fs.mkdirSync(cmdArr[1].slice(0,-2));
//              break;
//          case "touch":
//              console.log(cmd);
//              var filePath = path.join(__dirname,"/filedir/file.txt");
//              fs.writeFileSync(filePath,"hello node");
//              break;
//          case "delete":
//              var filePath = path.join(__dirname,"/filedir/file.txt");
//              fs.unlinkSync(filePath);
//              break;
//          default:
//              console.log("something erro");
//              break;
//      }
//  })
  
const fs = require("fs");
const path = require("path");

if(process.argv[2] == "list"){
    var fpath = process.argv[1].toString();
    var filePath = fpath.replace(/fileReader3.js/,'');//当前文件路径
    var fileList = [];
    for(var i = 0;i<fs.readdirSync(filePath).length;i++){
        var fileObj = {};
        fileObj["fileName"] = fs.readdirSync(filePath)[i];
        var fileSize = fs.statSync(fileObj["fileName"]).size;
        fileObj["fileSize"] = fileSize;
        fileList.push(fileObj);
    }
    console.log(fileList);
}
else if(process.argv[2] == "mkdir"&&process.argv[3] == "folder"){
        fs.mkdirSync("folder");
}
else{
    console.log("命令行参数错误");
}

// console.log("创建文件夹：");
// process.stdin.on('data',function(data){
//     var cmd = data.toString();
//     var cmdArr = cmd.split(" ");
//     console.log(cmd);
//     console.log(cmdArr);
    // switch(cmdArr[0]){
        // if (cmdArr[0] == "mkdir"){fs.mkdirSync(cmdArr[1].slice(0,-2));
        //     console.log("文件创建成功!");}
        // else if(cmdArr[0] == "touch"){var filePath = path.join(__dirname,"/filedir/file.txt");
        // fs.writeFileSync(filePath,"hello node");}
        // else{
        //     console.log("something erro");
        // }

        // case "delete":
        //     var filePath = path.join(__dirname,"/filedir/file.txt");
        //     fs.unlinkSync(filePath);
        //     break;
        // default:
        //     console.log("something erro");
        //     break;
        //}