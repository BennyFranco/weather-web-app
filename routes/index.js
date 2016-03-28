var express = require('express');
var router = express.Router();

var db;
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/ClimaPIEAES', function(err, dbc) {
  if (err) {
    throw err;
  }
  db = dbc;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/station/:name', function(req, res) {

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
      res.render('station', {
        "stationName" : stationName, "dataDateTime":dataDateTime, "stationSensors":stationSensors
      });
    });
});

router.get('/station/:name/:date', function(req, res) {
    db.collection(req.params.name).find({"DateTime":req.params.date}).toArray(function(err, result) {
      if (err) {
        throw err;
      }

      var stationName = req.params.name;
      var dataDateTime = [];
      var stationSensors = [];

      for (i = 0; i < result.length; i++) {
        dataDateTime.push(result[i].DateTime);
        stationSensors.push(result[i].sensores);
      }
      res.render('station', {
        "stationName" : stationName, "dataDateTime":dataDateTime, "stationSensors":stationSensors
      });
    });
});

module.exports = router;
