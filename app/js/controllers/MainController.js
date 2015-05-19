'use strict';

Advertisements.controller('MainController', function ($scope, $location,me, mainData, authentication, notifyService) {

    $scope.startPage = 1;
    $scope.username = authentication.GetUsername();
    $scope.isNotAdmin = (!$scope.isAdmin || $scope.isAdmin == "false");
    if ($scope.username) {
        me.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }
    var path = $location.path();
    if ((path.indexOf("user") != -1) && !authentication.isLoggedIn()) {
        $location.path('/');
    }

    $scope.pagination = function () {
        mainData.params.startPage = $scope.startPage;
        getAds();
    };
});