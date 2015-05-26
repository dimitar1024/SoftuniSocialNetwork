'use strict';

SoftUniNetwork.controller('FriendController', function ($scope, $location, mainData, authentication, notifyService) {
    $scope.startPage = 1;
    $scope.username = authentication.GetUsername();
    if ($scope.username) {
        authentication.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }

    $scope.searchUsersByName = function (username) {

        authentication.SearchUsersByName(username,
            function (searchUsers) {
                $scope.searchUsers = searchUsers;
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Password Change!", serverError)
            });
    };

    $scope.displayProfile = function (profileId) {
        $location.path('/home/' + profileId);
    };

});