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

    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

    service.GetOwnFriends = function (success, error) {
        $http.get(serviceUrl + '/me/friends', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success()
            }).error(error);
    };

    service.GetUserFullData = function (userName, success, error) {
        $http.get(serviceUrl + '/' + userName, { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.GetUserPreviewData = function (userName, success, error) {
        $http.get(serviceUrl + '/' + userName + '/preview', { headers: this.GetHeaders() })
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };


    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.userName;
        localStorage['isAdmin'] = serverData.isAdmin ? serverData.isAdmin : false;
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