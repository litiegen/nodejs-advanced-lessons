//dogBack.js
var Dog = require("./Dog.js");
//console.log(Dog);
var dog1 = new Dog("teddy",5);
function barkFun(){
    //this指向dog1
    console.log(this.name + "bark!!");
    console.log(this.energy);
}
//事件监听
dog1.on("bark",barkFun);

var intervalId = setInterval(function(){
    if (dog1.energy>=0){
        dog1.emit("bark");
    }
    else{
        clearInterval(intervalId);
    }
    dog1.energy = dog1.energy - 1;
},1000);
