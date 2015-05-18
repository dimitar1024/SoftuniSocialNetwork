'use strict';

var Advertisements = angular.module('Advertisements', ['ngRoute', 'ui.bootstrap', 'angular-loading-bar']);

Advertisements.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api');

Advertisements.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl:'templates/login.html',
            controller:'MainController'
        })
        .when('/register', {
            templateUrl:'templates/register.html',
            controller:'MainController'
        })
        .when('/logout', {
            templateUrl: 'templates/logout.html',
            controller: 'MainController'
        })
        .when('/', {
            templateUrl: 'templates/login.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo: '/'})

    });