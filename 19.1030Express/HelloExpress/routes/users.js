var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list',function(req,res,next){
  res.end("ahh");
})

module.exports = router;
