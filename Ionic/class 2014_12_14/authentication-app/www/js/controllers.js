angular.module('starter.controllers', [])

.controller('UserCtrl', function($scope) {
})

.controller('AccountCtrl', ["$scope", "$ionicPopup", "User", function($scope, $ionicPopup, User) {
    $scope.user = User.getUser();

    $scope.login = function () {
        User.login($scope.user.email, $scope.user.password, function(res ) {
            if (res.id) {
                $scope.user = res;
            } else {
                $ionicPopup.alert({
                    title: 'Login error!',
                    template: res.message
                });
            }
        });
    };

    $scope.register = function () {
        User.register($scope.user.email, $scope.user.password, function( res) {
            if (res.id) {
                $scope.user = res;
            } else {
                $ionicPopup.alert({
                    title: 'Register error!',
                    template: res.message
                });
            }
        });
    };

    $scope.logout = function () {
        User.logout();
        $scope.user = {};
    };
}])

.controller('MessagesCtrl', function($scope, $firebase) {
    var ref = new Firebase('https://demossuet.firebaseio.com/');
    var sync = $firebase(ref);
    /*sync.$set({foo: "bar1sdf"});

        sync.$push({hello1: "world1"}).then(function(newChildRef) {
            console.log("added record with id " + newChildRef.key());
        });*/

        var user = prompt("Enter User Name");

        $scope.messages = sync.$asArray();
        //$scope.messages.$add({ user: "message1", text: "Hello world" });

        $scope.sendMessage = function(txt){
            $scope.messages.$add({ text: txt, user : user });
        }


});
