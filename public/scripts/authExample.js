// auth0 vars
var lock = new Auth0Lock( 'Wb5M70U0cQobbJAkRCUnE4GBWStT7G7M', 'kdszafranski.auth0.com');
var logOutUrl = 'https://kdszafranski.auth0.com/v2/logout';

var myApp = angular.module( 'myApp', [] );

// basic controller
myApp.controller( 'authController', [ '$scope', '$http', function( $scope, $http ){

  // run init on controller load
  init();

  //run at controller load
  function init() {
    console.log( 'in init' );
    // check if a user's info is saved in localStorage
    if( JSON.parse( localStorage.getItem( 'userProfile' ) ) ){
      // if so, save userProfile as $scope.userProfile
      $scope.userProfile = JSON.parse( localStorage.getItem( 'userProfile' ) );
      console.log( 'loggedIn:', $scope.userProfile );
      $scope.showUser = true;
    }
    else{
      // if not, make sure we are logged out and empty
      emptyLocalStorage();
      $scope.showUser = false;
    }
  } // end init function

  $scope.logIn = function(){
    // call out logIn function from auth0.js
    console.log( 'in logIn' );
    lock.show( function( err, profile, token ) {
      if (err) {
        console.error( "auth error: ", err);
      } // end error
      else {
        // save token to localStorage
        localStorage.setItem( 'userToken', token );
        // save user profile to localStorage
        localStorage.setItem( 'userProfile', JSON.stringify( profile ) );
        // reload page because dirtyhaxorz
        location.reload();
      } // end no error
    }); //end lock.show
  }; // end scope.logIn

  $scope.logOut = function(){
    // call our logOutUrl
    $http({
      method:'GET',
      url: logOutUrl,
    }).then( function( data ){
      // if logged out OK
      if( data.data == 'OK' ){
        // empty localStorage
        emptyLocalStorage();
        $scope.showUser = false;
      }
    })
  }; // end scope.logIn

  $scope.getProtectedData = function() {
    var token = localStorage.getItem( 'userToken' );
    console.log(token);
    $http({
      method: 'GET',
      url: '/protected',
      header: {
        "Authorization": "Bearer " + token
      }
    }).then(function(response) {
      if(response.status == 200) {
        console.log('Protected Data: ', reponse.data);
      } else {
        console.log('Failed');
      }
    });
  }

}]); // end authController

var emptyLocalStorage = function(){
  localStorage.removeItem( 'userProfile' );
  localStorage.removeItem( 'userToken' );
}; // end emptyLocalStorage
