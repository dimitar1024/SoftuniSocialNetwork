'use strict';

Advertisements.controller('AuthenticationController', function ($scope, $location, $route,
                        authentication, mainData, notifyService) {

    var ClearData = function () {
        $scope.loginData = "";
        $scope.registerData = "";
        $scope.userData = "";
        $scope.passwordData = "";
    };

    $scope.login = function () {
        authentication.Login($scope.loginData,
            function(serverData) {
                notifyService.showInfo("Successful Login!");
                authentication.SetCredentials(serverData);
                ClearData();
                $location.path('/');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Login!", serverError)
            });
    };

    $scope.register = function () {
        authentication.Register($scope.registerData,
            function(serverData) {
                notifyService.showInfo("Successful Register!");
                authentication.SetCredentials(serverData);
                ClearData();
                $location.path('/');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Register!", serverError)
            });
    };

    $scope.logout = function () {
        notifyService.showInfo("Successful Logout!");
        ClearData();
        authentication.ClearCredentials();
        mainData.clearParams();
        $route.reload();
    };

    $scope.clear = function () {
        mainData.clearParams();
        adminServices.clearParams();
        $route.reload();
    };

    $scope.clearStatus = function () {
        adServices.clearParams();
        $route.reload();
    }
});