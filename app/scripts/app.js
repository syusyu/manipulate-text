'use strict';

/**
 * @ngdoc overview
 * @name manipulateTextApp
 * @description
 * # manipulateTextApp
 *
 * Main module of the application.
 */
angular
  .module('manipulateTextApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sql', {
        templateUrl: 'views/sql.html',
        controller: 'SqlCtrl',
        controllerAs: 'sql'
      })
      .when('/log', {
        templateUrl: 'views/log.html',
        controller: 'LogCtrl',
        controllerAs: 'log'
      })
      .when('/others', {
        templateUrl: 'views/others.html',
        controller: 'OthersCtrl',
        controllerAs: 'others'
      })
      .otherwise({
        redirectTo: '/sql'
      });
  });
