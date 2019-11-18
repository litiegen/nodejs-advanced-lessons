function loop(){
    console.log('I will loop forever!');
}
var a = setInterval(function(){
    loop();
},500)

setTimeout(function(){
    console.log("Gameover!");
    clearInterval(a)
},5000)
