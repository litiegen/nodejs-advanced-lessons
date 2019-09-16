//var timerId = setTimeout(function(){
var timerId = setInterval(function(){
    console.log("game over");
},1000);
//组织延时执行或者定时执行，回调函数的执行
timerId.unref();
timerId.ref();