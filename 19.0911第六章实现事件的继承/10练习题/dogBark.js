var dog = require("./dog.js");
var dog1 = new dog.Dog("taidi",22);
var dog2 = new dog.Dog("zangao",4);
dog1.on("bark",function(){
    this.energy = this.energy-1;
    console.log(this.dogName+" barked! "+"energy:"+this.energy);
    if(this.energy == 0){
        process.exit();
    }
})
dog2.on("bark",function(){
    this.energy = this.energy-1;
    console.log(this.dogName+" barked! "+"energy:"+this.energy);
    if(this.energy == 0){
        process.exit();
    }
})