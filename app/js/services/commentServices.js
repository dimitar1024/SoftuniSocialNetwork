SoftUniNetwork.factory('comment', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl;

    service.GetPostComments = function (postId, headers, success, error) {
        $http.get(serviceUrl + '/posts/' + postId + '/comments', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    }

    service.AddCommentToPost = function (postId,commentData, headers, success, error) {
        $http.post(serviceUrl + '/posts/' + postId + '/comments', commentData, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.DeleteComment = function (postId, idComment, headers, success, error) {
        $http.delete(serviceUrl + '/Posts/' + postId + '/comments/' + idComment, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.LikeComment = function (postId, idComment, headers, success, error) {
        $http.post(serviceUrl + '/Posts/' + postId + '/comments/' + idComment + '/likes',postId, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.UnlikeComment = function (postId, idComment, headers, success, error) {
        $http.delete(serviceUrl + '/Posts/' + postId + '/comments/' + idComment + '/likes', { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };


    return service;
});