var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jazmin', function(req, res) {
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/ClimaPIEAES', function(err, db) {
    if (err) {
      throw err;
    }
    db.collection('JAZMIN').find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.render('jazmin', {
        "jazmin" : result
      });
      console.log(result);
    });
  });
});

module.exports = router;
