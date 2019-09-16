const fs = require("fs");
const path = require("path");
var filPath = path.join(__dirname,"/stream.txt");
var writePath = path.join(__dirname,"/write.txt");
var readStream = fs.createReadStream(filPath);
var writeStream = fs.createWriteStream(writePath);
readStream.pipe(writeStream);