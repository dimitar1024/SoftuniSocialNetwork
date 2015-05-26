'use strict';

SoftUniNetwork.controller('MeController', function ($scope, $location, mainData, authentication, notifyService) {
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
                     $(document).mousemove(function (e) {
                         $('#preview').css('display', 'block');
                         $('#preview').css('top', e.pageY);
                         $('#preview').css('left', e.pageX);
                     });
                 })

    }

    $scope.clearPreviewInfo = function () {
        $('#preview').css('display', 'none');
    }

    $scope.approve = function (username) {
        authentication.ApproveFriendRequest(username,
            function (serverData) {
                notifyService.showInfo("Successful Approve Edit!");
                ClearData();
                $location.path('/user/friends');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Approve Edit!", serverError)
                console.log(serverError);
            });
    };

    $scope.reject = function () {
        authentication.RejectFriendRequest($scope.userData,
            function (serverData) {
                notifyService.showInfo("Successful Reject Edit!");
                ClearData();
                $location.path('/user/friends');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Reject Edit!", serverError)
                console.log(serverError);
            });
    };
});