var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 5000;
var locked = require('./routes/protected');


var base64 = require('base-64');
// FFS. Note that auth0's "base 64 encoding" is not valid base 64. Replace '_' with '/' and '-' with '+'
var encoded = '1xikoBIysg1ojOemoIyFS03ojEGnWQGXgY1Zwp4xhg0t+t0LCTJixxd+9km9hHqF';
var secret = base64.decode(encoded);
var JWT = require('jwt-async'),
          jwt = new JWT();
jwt.setSecret(secret);


app.use(bodyParser.json());

// static folder
app.use( express.static( 'public' ) );

// token parsing middleware run on every request
app.use(function(req, res, next) {
  req.jwt_auth = false;

  if(req.headers['authorization'])  {
      var jwt_token = req.headers['authorization'].substr(7);

      jwt.verify(jwt_token, function(err, jwt_data) {
          if(err) throw err;

          req.jwt_auth = jwt_data;
          next();
      });
  } else {
      next();
  }
});

app.use('/protected', locked);

// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
});

// base url route
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/index.html' ) );
}); // end base url
