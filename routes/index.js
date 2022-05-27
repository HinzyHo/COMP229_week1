var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { //this is a json object
     title: 'Express' ,
     user: "Hins"
    });
});

module.exports = router;
