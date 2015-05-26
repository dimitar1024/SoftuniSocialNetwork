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
            function (search) {
                $scope.searchUsers = search;
            },
            function (serverError) {
            });
    };

    $scope.displayProfile = function (profileId) {
        $location.path('/home/' + profileId);
    };

});