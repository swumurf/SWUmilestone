var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).send('respond with a resource jiyoon');
});

router.use('/userInfo/signin', require('./userInfo/signin'));
router.use('/userInfo/signup', require('./userInfo/signup'));

module.exports = router;
