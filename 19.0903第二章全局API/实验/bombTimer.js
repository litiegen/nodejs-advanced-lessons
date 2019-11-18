console.time("bomb");
function explode(){
    var arg1 = process.argv[2];
    if(arg1 == "e"){
        process.exit();
    }
    else if(arg1 == "k"){
        process.kill(process.pid);
    }
    else{
        setTimeout(function(){
            console.log("Bomb!!");
        },1000)
    }
}
explode();
console.timeEnd("bomb");
