var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 5000;
var locked = require('./routes/protected');

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

// static folder
app.use( express.static( 'public' ) );
