'use strict';

/**
 * @ngdoc function
 * @name kenzanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kenzanApp
 */
angular.module('kenzanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
