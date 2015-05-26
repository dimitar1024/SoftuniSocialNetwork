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
            templateUrl:'templates/all-post.html',
            controller:'MainController'
        })
        .when('/home', {
            templateUrl:'templates/all-post.html',
            controller:'MainController'
        })
        .when('/home/:id', {
            templateUrl: 'templates/all-post.html',
            controller: 'MainController'
        })
        .when('/post/:idPost', {
            templateUrl: 'templates/post.html',
            controller: 'PostController'
        })
        .when('/user/friends', {
            templateUrl: 'templates/user-friends.html',
            controller: 'MeController'
        })
        .when('/user/requests', {
            templateUrl: 'templates/user-requests.html',
            controller: 'MeController'
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