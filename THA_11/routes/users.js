import {} from './'
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
requires email, password, confirmPassword
Security Performance/ edge cases
email already exists?
convert email to lowercase , so making a standard in db
password hash
TODO: THA -> SQL/JS injection
*/
//post method

module.exports = router;