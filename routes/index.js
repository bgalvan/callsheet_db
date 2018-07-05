var express = require('express');
var router = express.Router();
var checkout = require('./checkout');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});


router.use('/checkout', checkout);


module.exports = router;
