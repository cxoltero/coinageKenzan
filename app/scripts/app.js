'use strict';

/**
 * @ngdoc overview
 * @name kenzanApp
 * @description
 * # kenzanApp
 *
 * Main module of the application.
 */
angular
  .module('kenzanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
