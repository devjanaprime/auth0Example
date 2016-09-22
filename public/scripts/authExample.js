console.log( 'js' );
var myApp=angular.module( 'myApp', [] );

myApp.controller( 'authController', [ '$scope', function( $scope ){
  console.log( 'authController here!');
  $scope.logIn = function(){
    // call out logIn function from auth0.js
    logIn();
  };
}]); // end authController
