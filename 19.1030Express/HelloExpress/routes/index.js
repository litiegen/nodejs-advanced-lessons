var express =  require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('index',{title:'Express yeah'});
})

router.get('/list',function(req,res,next){
    res.render('list',{userName:"litiegen",newList:[
      {"newId":1,newTitle:"lpl帅"},
      {"newId":2,newTitle:"lpl好帅"},
    ]});
})

router.get('/index/list',function(req,res,next){
    res.end('list');
})


module.exports = router;