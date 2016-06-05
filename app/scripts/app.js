'use strict';

/**
 * @ngdoc overview
 * @name sensorUiApp
 * @description
 * # sensorUiApp
 *
 * Main module of the application.
 */
angular
  .module('sensorUiApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sensor',{
	templateUrl: 'views/sensor.html',
        controller: 'SensorCtrl'
      })	
      .otherwise({
        redirectTo: '/'
      });
  });
