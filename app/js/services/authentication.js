'use strict';

SoftUniNetwork.factory('authentication', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl;

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/users/login', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Register = function (registerData, success, error) {
        $http.post(serviceUrl + '/users/register', registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Logout = function (success, error) {
        $http.post(serviceUrl + '/users/logout', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.GetUserProfile = function (success, error) {
        $http.get(serviceUrl + '/me', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.EditUserProfile = function (editUserData, success, error) {
        $http.put(serviceUrl + '/me', editUserData, { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.ChangePassword = function (passwordData, success, error) {
        $http.put(serviceUrl + '/me/ChangePassword', passwordData, { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success()
            }).error(error);
    };

    service.GetOwnFriends = function (success, error) {
        $http.get(serviceUrl + '/me/friends', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.GetOwnRequests = function (success, error) {
        $http.get(serviceUrl + '/me/requests', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.ApproveFriendRequest = function (approveId, success, error) {
        $http.put(serviceUrl + '/me/requests/' + approveId + '?status=approved', approveId, { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.RejectFriendRequest = function (approveId, success, error) {
        $http.put(serviceUrl + '/me/requests/' + approveId + '?status=rejected', approveId, { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.SearchUsersByName = function (userName, success, error) {
        $http.get(serviceUrl + '/users/search?searchTerm=' + userName, { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.GetFriendsDetailedFriendsList = function (userName, success, error) {
        $http.get(serviceUrl + '/users/' + userName + '/friends', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.GetFullUserData = function (userName, success, error) {
        $http.get(serviceUrl + '/users/' + userName, { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.GetUserPreviewData = function (userName, success, error) {
        $http.get(serviceUrl + '/users/' + userName + '/preview', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.SendFriendRequest = function (frientUsername, headers, success, error) {
        $http.post(serviceUrl + '/me/requests/' + frientUsername, frientUsername, { headers: headers })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.userName;
    };

    service.GetUsername = function () {
        return localStorage['username'];
    };

    service.ClearCredentials = function () {
        localStorage.clear();
    };

    service.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    service.isLoggedIn = function () {
        return localStorage['accessToken'];
    };

    return service;
});