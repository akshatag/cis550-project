var express = require('express');
var router = express.Router();
var path = require('path');

var mongoclient = require('mongodb').MongoClient
var url = "mongodb://team:FUSIONONFIRE1@ds137826.mlab.com:37826/ritebite"
var _db;

mongoclient.connect(url, function(err, db) {
  console.log('Connected to db!');
  _db = db;
});

var mysql = require('mysql');
var connection = mysql.createConnection({
  host : "ritebite.cqyy09trkzju.us-east-1.rds.amazonaws.com",
  user : "sakumar",
  password : "fusiononfire1",
  port: 3306
});

connection.connect(function(err){
  if (err) {
    console.error("Could not connect to RDS " + err.stack);
  } else {
    console.log('Connected to RDS');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', function(req, res, next){
  var sql = "SELECT shrt_desc FROM ritebite.ingredients;"
  connection.query(sql, function(err, result){
    var names = []
    for(var i = 0; i < result.length; i++) {
      names.push(result[i].shrt_desc)
    }
    //send to front end
  });
})


module.exports = router;
