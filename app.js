/****************************************************************************************** 
 * 
 * 
 * ui.router is used to navigate from one page to another
 * 
 * / represents the navigation link
 * 
   *******************************************************************************************/

//var app = angular.module('chatApp', ['ui.router']);
 var app = angular.module('chatApp', ['ui.router','btford.socket-io']);
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
        controller: 'registrationctrl'
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
    .state('dashBoard',{
        url : '/dashBoard',
        templateUrl:'templates/dashBoard.html',
        controller:'chatCtrl'
    })

$urlRouterProvider.otherwise('/login');

});
app.service('socketService', ['socketFactory', function SocketService(socketFactory){
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000')  
      
    })
}])