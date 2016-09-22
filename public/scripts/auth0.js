// auth0
// var lock = new Auth0Lock( 'CLIENTID', 'DOMAIN');
var lock = new Auth0Lock( 'FzlbLwW024XmqaSV8OjpkObvSEJUbOvl', 'devjanaprime.auth0.com');

var logIn = function(){
  console.log( 'in logIn' );
  lock.show(function(err, profile, token) {
    if (err) {
      console.error( "auth error: ", err);
    } // end error
    else {
      // save token to localStorage
      localStorage.setItem( 'userToken', token );
      console.log( 'token:', token );
      // save user profile to localStorage
      localStorage.setItem( 'userProfile', JSON.stringify( profile ) );
      console.log( 'user:', profile);
    } // end no error
  }); //end lock.show
}; // end logInNow
