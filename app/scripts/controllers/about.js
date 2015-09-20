'use strict';

/**
 * @ngdoc function
 * @name kenzanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kenzanApp
 */
angular.module('kenzanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
