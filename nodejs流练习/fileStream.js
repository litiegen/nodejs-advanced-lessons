const fs = require("fs");
const path = require("path");
var filPath = path.join(__dirname,"/from.txt");
var writePath = path.join(__dirname,"/to.txt");
var readStream = fs.createReadStream(filPath);
var writeStream = fs.createWriteStream(writePath);
readStream.pipe(writeStream);