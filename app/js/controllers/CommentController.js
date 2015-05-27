'use strict';

SoftUniNetwork.controller('CommentController', function ($scope, $routeParams, $location,comment, post, authentication, notifyService) {
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

    $scope.getsCommentPreviewLikes = function (postId, idComment) {
        comment.GetsCommentPreviewLikes(postId, idComment, authentication.GetHeaders(), function (likes) {
            $scope.commentLikes = likes;
        });
    };

    $scope.deleteComment = function (idPost, idComment) {
        comment.DeleteComment(idPost, idComment, authentication.GetHeaders(), function (posts) {
            notifyService.showInfo("Successful deleted comment!");
        }, function (posts) {
            notifyService.showError("Unsuccessful deleted comment!");
        })
    };

    $scope.addCommentToPost = function (postId) {
        comment.AddCommentToPost(postId, $scope.comment, authentication.GetHeaders(), function (comment) {
            notifyService.showInfo("Successful adding comment!");
        }, function (comment) {
            notifyService.showError("Unsuccessful adding comment!");
        })
    };

    $scope.editCommentToPost = function (postId, commentId) {
        comment.EditCommentToPost(postId, commentId, $scope.comment, authentication.GetHeaders(), function (comment) {
            notifyService.showInfo("Successful adding comment!");
            editOff();
        }, function (comment) {
            notifyService.showError("Unsuccessful adding comment!");
            editOff();
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

    $scope.editOn = function () {
        $scope.edit = true;
    }


    $scope.editOff = function () {
        $scope.edit = false;
    }

});