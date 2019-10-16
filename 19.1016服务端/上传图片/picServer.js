const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    console.log(pathName);
    if(pathName == "/"){
        showIndex(res);
    }
    else if(pathName=="/list"){
        showList(res);
    }
    else if(pathName == '/image.png'){
        showImg(res);
    }
    else if(pathName == "/upload" && req.method == "POST"){
        uploadFile(req,res);
    }
    else if(pathName.indexOf("upload")>=0&&req.method=="GET"){
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        if(pathName.indexOf("jpg")>=0){
            console.log('jpg');
            res.writeHead(200,{"Content-Type":"image/jpeg"});
        }
        if(pathName.indexOf("png")>=0){
            console.log('png');
            res.writeHead(200,{"Content-Type":"image/png"});
        }
        
        res.end(imgContent);
    }
    else if(pathName == "/getlist"){
        var files = fs.readdirSync(__dirname+"/upload");
        // console.log(files);
        // for(var i=0;i<files.length;i++){
        //     var img = fs.readFileSync(__dirname+"/upload"+files[i]);
        //     var fileStr = JSON.stringify(img);
        //     res.end(fileStr);
        // }
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }
}).listen(8081)

function showIndex(res){
    var indexPath = path.join(__dirname,"/index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}
function showImg(res){
    var imgPath = path.join(__dirname,"/image.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}
function showList(res){
    var listPath = path.join(__dirname,"/list.html");
    var fileContent = fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(fileContent);
}
function uploadFile(req,res){
    var dataStr = "";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length-2);
        var imgData = "";
        for(var i=0;i<bufArr.length;i++){
            imgData += bufArr[i];
        }
        var buf = Buffer.from(imgData,"binary");
        var timer = (new Date()).getTime();
        fs.writeFileSync(__dirname+"\\upload\\"+timer+".png",buf,{"encoding":"binary"});
        res.end("submit sucess");
    })
}
/**
 * 地址栏中发起http请求
 * 超链接发起http
 * 提交表单发起请求
 * ajax发起请求
 * 
 */