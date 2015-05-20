'use strict';

var SoftUniNetwork = angular.module('SoftUniNetwork', ['ngRoute', 'ui.bootstrap', 'angular-loading-bar']);

SoftUniNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

SoftUniNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl:'templates/login.html',
            controller:'MainController'
        })
        .when('/register', {
            templateUrl:'templates/register.html',
            controller:'MainController'
        })
        .when('/', {
            templateUrl:'templates/all-ads.html',
            controller:'MainController'
        })
        .when('/home', {
            templateUrl:'templates/all-ads.html',
            controller:'MainController'
        })
        .when('/me/profile', {
            templateUrl:'templates/edit-user.html',
            controller:'MainController'
        })
        .when('/me/password', {
            templateUrl: 'templates/edit-password.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo: '/'})

    });