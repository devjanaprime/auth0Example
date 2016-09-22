Auth0 Example
=============

In this example project we'll user Auth0 to allow user to log in to our site via a Google account. This requires some setup with an Auth0 account, a Google developer account, and our page itself.

Needed Accounts
--------------
First, create an account with Auth0 an a google developer account:

* https://auth0.com/
* https://console.developers.google.com/

Account Setup
=============

Initial Google setup
--------------------
First, we'll need to create a new project:

![step 0](images/00-google 0.png)

Once our new project is created, we'll want to create some credentials for this project and set it as an OAuth project.

![step 1](images/01-google 1.png)

Now that we've got a new OAuth project we'll need to configure the consent screen. This is the screen that tells the users what our app will be accessing of their profile. We'll be accessing only enough to prove they are real.

![step 2](images/02-google 2.png)

On the next screen, let's give our product a name and ill in any other info if you have it ready.

![step 3](images/03-google 3.png)

On the next screen we'll choose that this is a Web Application and give the client for our application a name.

![step 4](images/04-google 4.png)

Save your work and keep this page open in a tab. We'll be coming back to it later.

Auth0 setup
-----------
First, we'll want to create a "client" on Auth0. This will be what talks to Google to get out authentication working.

![step 5](images/05-auth0 0.png)

Let's give our client a name and choose "Single Page Web Application".

![step 6](images/06-auth0 1.png)

We'll be using Angular, of course.

![step 7](images/07-auth0 2.png)

Once our app is created, take note of the domain as listed here. Copy it.

Also, in the "Allowed Callback URLs" text area, input the domains from which this app will be receiving calls. For this example we'll be using 'http://localhost:3030'.
Note: if you deploy to something like Heroku, you'll need to add the URLs here.

![step 8](images/08-auth0 3.png)

Connecting Auth0 to Google
--------------------------
![step 9](images/09-google 5a.png)

![step 10](images/10-auth0 4.png)

![step 11](images/11-auth0 5.png)

![step 12](images/12-google 6a.png)

Setting up our project
======================
