'use strict';

SoftUniNetwork.controller('PostController', function ($scope, $routeParams,$location, mainData, post, authentication, notifyService) {
    $scope.startPage = 1;
    $scope.PageSize = 5;
    $scope.username = authentication.GetUsername();
    if ($scope.username) {
        authentication.GetUserProfile(function (serverData) {
            $scope.userData = serverData;
        })
    }

    authentication.GetOwnFriends(function (friends) {
        $scope.friendList = friends;
    })

    if ($routeParams.idPost) {

        post.GetPsotById($routeParams.idPost, authentication.GetHeaders(), function (posts) {
            $scope.meWell = posts;
        });
    }
    else {

        if ($routeParams.id) {
            post.GetFriendWallByPages($scope.PageSize, $routeParams.id, authentication.GetHeaders(), function (posts) {
                $scope.meWell = posts;
            });
        } else {
            post.GetNewsFeedPages($scope.PageSize, authentication.GetHeaders(), function (posts) {
                $scope.meWell = posts;
            });
        }

        
    }
    
    $scope.getsPostPreviewLikes = function (postId) {
        post.GetsPostPreviewLikes(postId, authentication.GetHeaders(), function (likes) {
            $scope.postLikes = likes;
        });
    };

    $scope.addNewPost = function () {
        if ($routeParams.id) {
            $scope.post.username = $routeParams.id;
        } else {
            $scope.post.username = $scope.username;
        }
        
        post.AddNewPost($scope.post, authentication.GetHeaders(), function (posts) {
            notifyService.showInfo("Successful added post!");
        }, function (posts) {
            notifyService.showError("Unsuccessful added post!");
        })
        
    };

    $scope.editPost = function (postId) {
        if ($routeParams.postId) {
            $scope.post.username = $routeParams.postId;
        } else {
            $scope.post.username = $scope.username;
        }

        post.EditPost(postId, $scope.post, authentication.GetHeaders(), function (posts) {
            notifyService.showInfo("Successful edit post!");
        }, function (posts) {
            notifyService.showError("Unsuccessful edit post!");
        })

    };

    $scope.deletePost = function (idPost) {
        post.DeletePost(idPost, authentication.GetHeaders(), function (posts) {
            notifyService.showInfo("Successful deleted post!");
        }, function (posts) {
            notifyService.showError("Unsuccessful deleted post!");
        })
    };


    $scope.likePost = function (postId) {
        post.LikePost(postId, authentication.GetHeaders(), function (posts) {
            notifyService.showInfo("Successful like post!");
        }, function (posts) {
            notifyService.showError("Unsuccessful like post!");
        })
    };

    $scope.unlikePost = function (postId) {
        post.UnlikePost(postId, authentication.GetHeaders(), function (posts) {
            notifyService.showInfo("Successful unlike post!");
        }, function (posts) {
            notifyService.showError("Unsuccessful unlike post!");
        })
    };

    $scope.displayPost = function (postId) {
        $location.path('/post/' + postId);
    };

    $scope.editPostById = function (postId) {
        $location.path('/post/' + postId + '/edit');
    };
});