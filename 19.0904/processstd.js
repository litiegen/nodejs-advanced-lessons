// process.stdin.on("data",function(data){
//     console.log(data);
// })
var i = 0;

process.stdin.on("data",function(data){
    var user = {
        username: console.log("用户输入了："+data),
        age:console.log("用户输入了："+data),
        qq:console.log("用户输入了："+data)
    }
    console.log("username:%s",user.username);
    console.log("age:%d",user.age);
    console.log("user:%j",user);
    i++;
    if(i==4){
        process.exit();
    }
    else{
        console.log(data.toString);
    }
})