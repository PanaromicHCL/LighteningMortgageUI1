'use strict';

// Declare app level module which depends on views, and core components
angular.module('petApp', [
  'ngRoute', 'ui.bootstrap', 'signInModule' ,'transctionsModule', 'welcomeModule'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when('/signUp', {
        templateUrl: 'signUp/signIn-template.html',
        controller: 'paymentController'
      }).when('/login', {
        templateUrl: 'login/login-template.html',
        controller: 'loginController'
      }).when('/welcome', {
        templateUrl: 'welcome/welcome-template.html',
        controller: 'welcomeController'
      })
     
      .otherwise({ redirectTo: '/signIn' });
  }]);
/*
 when('/transctions', {
       templateUrl: 'transactions/transctions.html',
        controller: 'transctionsController'
      })
*/