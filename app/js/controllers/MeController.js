﻿'use strict';

SoftUniNetwork.controller('MeController', function ($scope, $location, authentication, notifyService) {
    $scope.startPage = 1;
    $scope.username = authentication.GetUsername();
    if ($scope.username) {
        authentication.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }

    authentication.GetOwnFriends(function (friends) {
        $scope.friendList = friends;
    })

    authentication.GetOwnRequests(function (requests) {
        $scope.requests = requests;
    })

    $scope.GetUserPreviewData = function (username) {
        authentication.GetUserPreviewData(username,
                 function (resp) {
                     $scope.preview = resp;
                     
                 })

    }

    $scope.clearPreviewInfo = function () {
        $('#preview').css('display', 'none');
    }

    $scope.approve = function (username) {
        authentication.ApproveFriendRequest(username,
            function (serverData) {
                notifyService.showInfo("Successful Approve Edit!");
                $location.path('/user/friends');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Approve Edit!", serverError)
                console.log(serverError);
            });
    };

    $scope.reject = function (username) {
        authentication.RejectFriendRequest(username,
            function (serverData) {
                notifyService.showInfo("Successful Reject Edit!");
                $location.path('/user/friends');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Reject Edit!", serverError)
                console.log(serverError);
            });
    };
});