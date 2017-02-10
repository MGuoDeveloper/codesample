var express = require('express');
var router = express.Router();
var user = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eat Booking System' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Eat Booking System' });
});

router.get('/contactinfo', function(req, res, next) {
  res.render('index', { title: 'Eat Booking System' });
});

router.post('/complete/reserve', user.completeReserve);

module.exports = router;
