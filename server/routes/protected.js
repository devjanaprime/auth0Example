var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {


  console.log('here');
  res.sendStatus(200);
   // bar
  // function(req, res) {
  //   if (!req.user.admin) {
  //     console.log('tokenized user', req.user);
  //     return res.sendStatus(401);
  //   } else {
  //     console.log('ok!');
  //     res.sendStatus(200);
  //   }
  // }
});

module.exports = router;
