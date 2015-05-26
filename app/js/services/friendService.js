'use strict';

SoftUniNetwork.factory('friend', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl;

    service.SearchUsersByName = function (userName, success, error) {
        $http.get(serviceUrl + '/users/search?searchTerm=' + userName, { headers: this.GetHeaders() })
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



});