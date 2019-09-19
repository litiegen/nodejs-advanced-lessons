const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
/**删除文件 */
fs.unlinkSync(filePath);