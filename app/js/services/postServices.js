﻿SoftUniNetwork.factory('post', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl;

    service.GetNewsFeedPages = function (postOnPage, headers, success, error) {
        $http.get(serviceUrl + '/me/feed?StartPostId&PageSize=' + postOnPage, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.GetFriendWallByPages = function (postOnPage,user, headers, success, error) {
        $http.get(serviceUrl + '/users/' + user + '/wall?StartPostId&PageSize=' + postOnPage, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.GetPsotById = function (postId, headers, success, error) {
        $http.get(serviceUrl + '/posts/' + postId, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    }

    service.GetsPostPreviewLikes = function (postId, headers, success, error) {
        $http.get(serviceUrl + '/posts/' + postId + '/likes/preview', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    }

    service.AddNewPost = function (postData,headers,success, error) {
        $http.post(serviceUrl + '/posts', postData, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.EditPost = function (postId,postData, headers, success, error) {
        $http.put(serviceUrl + '/posts/' + postId, postData, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.DeletePost = function (idPost, headers, success, error) {
        $http.delete(serviceUrl + '/Posts/' + idPost, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.LikePost = function (postId,headers, success, error) {
        $http.post(serviceUrl + '/Posts/' + postId + '/likes', postId, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.UnlikePost = function (postId, headers, success, error) {
        $http.delete(serviceUrl + '/Posts/' + postId + '/likes', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    return service;
});