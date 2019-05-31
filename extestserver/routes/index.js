var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  //res.status(200).send(req.body.str);
  var resjson=JSON.stringify({
    str:req.body.str
  });
  res.status(200).json(resjson);
});


module.exports = router;
