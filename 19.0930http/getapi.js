const https = require("https");

var apiurl = "https://api.jisuapi.com/weather/query?appkey=6d074078756352b6&city=石家庄";

apiurl = encodeURI(apiurl);

https.get(apiurl,function(res){
    var result = "";
    res.on("data",function(chunk){
        result+=chunk;
    })
    res.on("end",function(){
        console.log(result);
    })
})