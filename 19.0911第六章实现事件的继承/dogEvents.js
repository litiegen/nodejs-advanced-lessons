const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(dogName){
    EventEmitter.call(this);
    this.dogName = dogName;
    var that = this;
    setTimeout(function(){
        that.emit("barkk");
    },1000);
}
Dog.prototype.__proto__ = EventEmitter.prototype;
var dog = new Dog("keji");
dog.on("barkk",function(){
    console.log(this.dogName+" can bark");
})
