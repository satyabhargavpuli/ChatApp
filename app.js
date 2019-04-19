/**
 * 
 * 
 * ui.router is used to navigate from one page to another
 * 
 * ./ represents the navigation link
 */


var app = angular.module('chatApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginctrl'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'templates/registration.html',
        controller: 'registerCtrl'
    })
    .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'templates/forgotPassword.html',
        controller:'forgotCtrl'
    })
    .state('resetPassword', {
        url: '/resetPassword',
        templateUrl: 'templates/resetPassword.html',
        controller:'resetPasswordCtrl'
    })

$urlRouterProvider.otherwise('/login');

});