'use strict';

SoftUniNetwork.controller('MainController', function ($scope, $location, mainData, authentication, notifyService) {
    $scope.startPage = 1;
    $scope.username = authentication.GetUsername();
    //getUserFullData();
    if ($scope.username) {
        authentication.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }

    $scope.fileSelected = function (fileInputField) {
        //delete $scope.userData.profileImageData;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                $scope.userData.profileImageData = reader.result;
                $(".profileImageData").html("<img src='" + reader.result + "' width=150 ng-model='userData.profileImageData'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.CoverImageData = function (fileInputField) {
        //delete $scope.userData.coverImageData;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                $scope.userData.coverImageData = reader.result;
                $(".CoverImageData").html("<img src='" + reader.result + "' width=150 ng-model='userData.coverImageData'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };


});