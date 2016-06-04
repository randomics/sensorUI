'use strict';

/**
 * @ngdoc function
 * @name sensorUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sensorUiApp
 */
angular.module('sensorUiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
