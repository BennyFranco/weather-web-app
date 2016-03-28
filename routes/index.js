var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/station/:name', function(req, res) {
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/ClimaPIEAES', function(err, db) {
    if (err) {
      throw err;
    }

    db.collection(req.params.name).find({}).toArray(function(err, result) {
      if (err) {
        throw err;
      }

      var stationName = result[0].name
      var dataDateTime = []
      var stationSensors = []

      for (i = 0; i < result.length; i++) {
        dataDateTime.push(result[i].DateTime);
        stationSensors.push(result[i].sensores);
      }
      res.render('jazmin', {
        "stationName" : stationName, "dataDateTime":dataDateTime, "stationSensors":stationSensors
      });
      //console.log(result);
    });
  });
});

router.get('/station/:name/:date', function(req, res) {
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/ClimaPIEAES', function(err, db) {
    if (err) {
      throw err;
    }

    db.collection(req.params.name).find({"DateTime":req.params.date}).toArray(function(err, result) {
      if (err) {
        throw err;
      }

      var stationName = result[0].name
      var dataDateTime = []
      var stationSensors = []

      for (i = 0; i < result.length; i++) {
        dataDateTime.push(result[i].DateTime);
        stationSensors.push(result[i].sensores);
      }
      res.render('jazmin', {
        "stationName" : stationName, "dataDateTime":dataDateTime, "stationSensors":stationSensors
      });
      //console.log(result);
    });
  });
});

module.exports = router;
