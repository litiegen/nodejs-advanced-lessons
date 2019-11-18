var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/add",function(req,res,next){
  console.log(req.body)
  console.log(req.body.title)
  console.log(req.body.content)
  var title = req.body.title;
  var content = req.body.content;
  var con = mysql.createConnection(dbconfig);
  con.connect();//连接数据库
  con.query("insert into chapters(title,content) values(?,?)",[title,content],
  function(err,result){
    if(err){
      console.log(err)
    }
    else{
      console.log(result)
      res.end("insert success")
    }
  });//防止恶意语句
})


router.get("/list",function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err)
    }
    else{
      console.log(result)
      res.render('list',{chaptersList:result})
    }
  })
})
router.get("/del",function(req,res,next){
  var chaptersId = req.query.chaptersid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chaptersid=?",[chaptersId],
  function(err,result){
    if(err){
      console.log(err)
    }
    else{
      res.end('delete success')
    }
  })
})
module.exports = router;
