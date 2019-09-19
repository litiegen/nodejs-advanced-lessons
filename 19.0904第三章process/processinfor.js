/**
 * process.pid进程的id值，唯一标识
 * process.platform运行所在的平台
 * 
 * process.argv获取命令行的参数，是一个数组，默认两个数组元素
 * process.argv[0]表示的node的可执行文件所在路径
 * process.argv[1]表示当前执行脚本文件所在路径
 * process.cwd()当前脚本执行所在的路径
 */
console.log(process.pid);
console.log(process.platform);
console.log(process.argv);
console.log(process.cwd());