var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 3030;

// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
});

// delete route template
app.put( '/deleteRoute', urlencodedParser, function( req, res ){
  console.log( 'deleteRoute hit:', req.body );
  var responseObject ={
    response: 'response text from delete',
    reqBody: req.body
  };
  res.send( responseObject );
}); // end delete route template

// base url route
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/index.html' ) );
}); // end base url


// template get route
app.get( '/getRoute', function( req, res ){
  console.log( 'getRoute hit' );
  var responseObject ={
    response: 'response text from get'
  };
  res.send( responseObject );
}); // end base url

// post route template
app.post( '/postRoute', urlencodedParser, function( req, res ){
  console.log( 'postRoute hit:', req.body );
  var responseObject ={
    response: 'response text from post',
    reqBody: req.body
  };
  res.send( responseObject );
}); // end post route template

// put route template
app.put( '/putRoute', urlencodedParser, function( req, res ){
  console.log( 'putRoute hit:', req.body );
  var responseObject ={
    response: 'response text from post',
    reqBody: req.body
  };
  res.send( responseObject );
}); // end post route template

// static folder
app.use( express.static( 'public' ) );
