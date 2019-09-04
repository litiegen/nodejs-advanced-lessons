function loop(){
    console.log('I will loop forever!');
}
setInterval(function(){
    loop();
},500)
setTimeout(function(){
    console.log("Gameover!");
},5000)
