console.log(process.argv[0])//E:\nodejs\node.exe node路径
console.log(process.argv[1])//E:\processArg.js 文件路径
var arg1 = process.argv[2];

if(arg1 == undefined || arg1 == "-h"){
    console.log("帮助：命令参数需为算数运算式");
}
else{
    var result = eval(arg1);
    console.log(arg1+"=%s",result);
}