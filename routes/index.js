var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact-us');
});

router.get('/services', function(req, res, next) {
  res.render('services');
});

router.get('/price-estimator', function(req, res, next) {
  res.render('price-estimator');

});

router.get('/visualizer', function(req, res, next) {
  res.render('visualizer');
});

module.exports = router;
