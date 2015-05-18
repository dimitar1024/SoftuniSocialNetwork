'use strict';

Advertisements.factory('authentication', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl + '/users';

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/login', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Register = function (registerData, success, error) {
        $http.post(serviceUrl + '/register', registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Login = function (logoutData, success, error) {
        $http.post(serviceUrl + '/logout', logoutData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.SetCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.username;
        localStorage['isAdmin'] = serverData.isAdmin ? serverData.isAdmin : false;
    };

    service.GetUsername = function () {
        return localStorage['username'];
    };

    service.GetIsAdmin = function () {
        return localStorage['isAdmin'];
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