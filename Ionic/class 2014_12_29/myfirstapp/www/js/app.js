// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url:"/home",
                templateUrl: "templates/home.html",
                controller: "myController"
            })
            .state('about', {
                url:"/about",
                templateUrl: "templates/about.html",
                controller: "about"
            })
            .state('contact', {
                url:"/contact",
                templateUrl: "templates/contact.html",
                controller: "contact"
            })
            .state('chat', {
                url:"/chat",
                templateUrl: "templates/chat.html",
                controller: "chat"
            })
            .state('register', {
                url:"/register",
                templateUrl: "templates/register.html",
                controller: "register"
            });

        $urlRouterProvider.otherwise('/home');



})
    .controller("myController", function($scope){
        $scope.btnClick = function(){
            alert($scope.txt1);
        }

        $scope.name = "Rehan";
    })
    .controller("about", function(){
    })
    .controller("contact", function($scope, $firebase){

        var CON = new Firebase("https://demossuet.firebaseio.com/")
        var commentsRef = CON.child('comments');
        var commentsSync = $firebase(commentsRef);

        var commentsArray = commentsSync.$asArray();
        $scope.comments = commentsArray;
        //$scope.messages = [];

        $scope.contact = {
            firstname : "",
            lastname : "",
            comments : "",
            time : ""
        }


        $scope.submitComment = function(){
            //alert($scope.message.text);

            var msg = {
                firstname : $scope.contact.firstname,
                lastname : $scope.contact.lastname,
                comments : $scope.contact.comments,
                time : Date.now()
            }
            $scope.comments.$add(msg);
        }
    })
    .controller("chat", function($scope, $firebase){

        var CON = new Firebase("https://demossuet.firebaseio.com/")
        var messageRef = CON.child('messages');
        var messageSync = $firebase(messageRef);

        var messageArray = messageSync.$asArray();
        $scope.messages = messageArray;
        //$scope.messages = [];

        $scope.message = {
            text : "",
            user : "",
            time : ""
        }

        var user = prompt("User Name");

        $scope.msgSend = function(){
            //alert($scope.message.text);

            if(!$scope.message.text.trim()){
                return;
            }

            var msg = {
                text : $scope.message.text,
                user : user,
                time : Date.now()
            }
            $scope.messages.$add(msg);
        }

    })



.controller("register", function($scope, $firebase, $firebaseAuth){

    var ref = new Firebase("https://demossuet.firebaseio.com/")
    $scope.authObj = $firebaseAuth(ref);

        $scope.register = function(){

            alert($scope.user.email)
            alert($scope.user.password)
            $scope.authObj.$createUser($scope.user.email, $scope.user.password).then(function() {
                alert("User created successfully!");
            })
        }
        $scope.login = function(){

            alert($scope.user.email)
            alert($scope.user.password)
            $scope.authObj.$authWithPassword({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function(authData) {
                    console.log(authData);
                    alert("Logged in as:", authData.uid);
                }).catch(function(error) {
                    alert("Error: " + error);
                });
        }

        /*$scope.authObj.$createUser("my@email.com", "mypassword").then(function() {
            console.log("User created successfully!");

            return $scope.authObj.$authWithPassword({
                email: "my@email.com",
                password: "mypassword"
            });
        }).then(function(authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.error("Error: ", error);
            });*/




});








