const stream = require("stream");
var reader = new stream.Readable();
function MyReadable(){
    var arr = [];
    for (var i = 65; i < 91; i++){
        arr.push(String.fromCharCode(i));
    }return arr.join(",");
}
reader.push(MyReadable());
reader.push(null);
reader.pipe(process.stdout);
