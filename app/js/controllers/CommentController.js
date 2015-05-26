'use strict';

SoftUniNetwork.controller('CommentController', function ($scope, $routeParams, $location, mainData,comment, post, authentication, notifyService) {
    $scope.startPage = 1;
    $scope.PageSize = 5;
    $scope.username = authentication.GetUsername();
    if ($scope.username) {
        authentication.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }

    comment.GetPostComments($routeParams.idPost, authentication.GetHeaders(), function (com) {
        $scope.comments = com;
    });

    $scope.deleteComment = function (idPost, idComment) {
        comment.DeleteComment(idPost, idComment, authentication.GetHeaders(), function (posts) {
            notifyService.showInfo("Successful deleted comment!");
        }, function (posts) {
            notifyService.showError("Unsuccessful deleted comment!");
        })
    };


    $scope.likeComment = function (commentId, idComment) {
        comment.LikeComment(commentId, idComment, authentication.GetHeaders(), function (comment) {
            notifyService.showInfo("Successful like comment!");
        }, function (comment) {
            notifyService.showError("Unsuccessful like comment!");
        })
    };

    $scope.unlikeComment = function (commentId, idComment) {
        comment.UnlikeComment(commentId, idComment, authentication.GetHeaders(), function (comment) {
            notifyService.showInfo("Successful unlike post!");
        }, function (comment) {
            notifyService.showError("Unsuccessful unlike post!");
        })
    };

});