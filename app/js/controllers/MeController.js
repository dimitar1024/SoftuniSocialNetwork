'use strict';

Advertisements.controller('MeController', function ($scope, $location, $route,
                        authentication, mainData, me,adServices, adminServices, notifyService) {

    var ClearData = function () {
        $scope.loginData = "";
        $scope.registerData = "";
        $scope.userData = "";
        $scope.passwordData = "";
    };

    $scope.editUser = function () {
        me.EditUserProfile($scope.userData,
            function(serverData) {
                notifyService.showInfo("Successful Profile Edit!");
                ClearData();
                $location.path('/user/home');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Profile Edit!", serverError)
            });
    };

    $scope.changePassword = function () {
        me.ChangePassword($scope.passwordData,
            function() {
                notifyService.showInfo("Successful Password Change!");
                ClearData();
                $location.path('/user/home');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Password Change!", serverError)
            });
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