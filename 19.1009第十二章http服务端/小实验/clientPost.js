const http = require("http");
const url = require("url");
const fs = require("fs");
const querstring = require("querystring");

var options = {
    host:"localhost",
    port:8000,
    method:"post"
}
var userName = process.argv[2];
var pwd = process.argv[3];
var postData = {userName:userName,pwd:pwd};
postData = querstring.stringify(postData);
var req = http.request(options,function(res){

})

req.write(postData);
req.end();