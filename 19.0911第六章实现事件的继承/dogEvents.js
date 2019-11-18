const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(dogName){
    EventEmitter.call(this);
    this.dogName = dogName;
    var that = this;
    setTimeout(function(){
        that.emit("bark");
    },1000);
}
Dog.prototype.__proto__ = EventEmitter.prototype;
var dog = new Dog("kitty");
dog.on("bark",function(){
    console.log(this.dogName+"  can bark");
})
