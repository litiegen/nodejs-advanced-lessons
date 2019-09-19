function Bomb(){
    this.message = "bomb!";
}
Bomb.prototype.explode = function(){
    console.log(this);
    console.log(this.message);
}

var bomb = new Bomb();