var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var TailorInfo = require('../models/MobileDetailsModel.js');

/* GET /todos listing. */
router.get('/tailors', function(req, res, next) {
  TailorInfo.tailorInfoModel.find({}, function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

router.get('/tailors', function(req, res, next) {
  TailorInfo.tailorInfoModel.find({}, function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

router.get('/tailors/:id', function(req, res, next) {
  var params = req.params;
  TailorInfo.particularTaiorDetials.find({_id : params.id}, function (err, todos) {
    if (err) return next({status : 404, error : "User Not Found"});
    res.json(todos);
  });
});

module.exports = router;