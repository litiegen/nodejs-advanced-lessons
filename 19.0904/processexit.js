var arg1 = process.argv[2];
if(arg1 == "e"){
    progcess.exit();
}
else if(arg1 == "k"){
    process.kill(process.pid);
}
else{
    setTimeout(function(){
        console.log("延时结束");
    },5000)
}