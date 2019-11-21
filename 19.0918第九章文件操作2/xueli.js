const fs = require('fs'),
      path=require('path'),
      org1 = process.argv[2],
      org2 = process.argv[3],
      error=console.error;

if(typeof(org1)==='undefined'){
  error('您尚未输入命令！');
  process.exit(1);
}
else if(org1=='list' && typeof(org2)==='undefined'){
     fs.readdir(__dirname,(err,files)=>{
        if(err){
            error(err.message);           
         }else{
            files.forEach(function(file){
               fs.stat(file,(err,stats)=>{
                 if(err){
                     console.log('something is error')
                 }else{
                    var filesize = stats.size;
                    console.log('{"fileName":"%s","fileSize":"%s"}',file,filesize);
                 }
               });  
            });     
         }          
     });
   }
   else if(org1=='mkdir' && org2=='folder'){
     fs.mkdirSync('folderr');
   }
   else{
      console.error('您输入的命令有误！');
      process.exit(1);
   }
