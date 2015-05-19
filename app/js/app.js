'use strict';

var Advertisements = angular.module('Advertisements', ['ngRoute', 'ui.bootstrap', 'angular-loading-bar']);

Advertisements.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

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
        .when('/', {
            templateUrl:'templates/all-ads.html',
            controller:'MainController'
        })
        .when('/user/home', {
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