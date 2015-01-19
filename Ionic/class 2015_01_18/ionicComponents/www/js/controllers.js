angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopover, $ionicLoading, $ionicModal, $ionicBackdrop, $timeout, $ionicActionSheet) {

        /* actionSheet */

        $scope.show1 = function() {

            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>Share on FB' },
                    { text: '<b>Share on Twitter' }
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel Button',
                cancel: function() {
                    alert("Cancel")
                    // add cancel code..
                },
                buttonClicked: function(index) {
                    // alert(index);
                    if(index == 0){

                    } else if(index == 1){

                    }
                    return true;
                }
            });

        }

        $scope.show = function() {

            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>Share on FB' },
                    { text: '<b>Share on Twitter' },
                    { text: '<b>Share on WhatsApp' },
                    { text: '<b>Share on Bluutooth' }
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel Button',
                cancel: function() {
                    alert("Cancel")
                    // add cancel code..
                },
                buttonClicked: function(index) {
                   // alert(index);
                    if(index == 0){
                        $scope.show1()
                    } else if(index == 1){

                    }
                    return true;
                }
            });

            // For example's sake, hide the sheet after two seconds
            /*$timeout(function() {
                hideSheet();
            }, 2000);*/

        };

        /* actionSheet */

        /* $ionicBackdrop */
/*
        $ionicBackdrop.retain();
        $timeout(function() {
            $ionicBackdrop.release();
        }, 1000);*/

        /* $ionicBackdrop */


        /* Modal */
/*

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
                $scope.modal = modal;

            });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
*/

        /* Modal */



/*
         *//* loading *//*
         $ionicLoading.show({
         template: 'Loading...'
         });
         *//* loading *//*

         $scope.hide = function(){
         $ionicLoading.hide();
         };*/






        // .fromTemplate() method
        var template = '<ion-popover-view>' +
            '<ion-header-bar> ' +
            '<h1 class="title">My Popover Title</h1> ' +
            '</ion-header-bar> ' +
            '<ion-content> ' +
            'Hello! ' +
            '<br> <a href="#/tab/chats">Chats</a>' +
            '</ion-content>' +
            '</ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope,
        });

        /*// .fromTemplateUrl() method
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope,
        }).then(function(popover) {
                $scope.popover = popover;
            });*/


        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {
            // Execute action
        });

    })

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
