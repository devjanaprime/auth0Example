var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // check if this user has a token
  if(req.jwt_auth) {
    console.log('logged in');
    res.sendStatus(200);
  } else {
    // no soup for you!
    console.log("unauthenticated");
    res.sendStatus(401);
  }
});

module.exports = router;
