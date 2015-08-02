'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:RoutingCtrl
 * @description
 * # RoutingCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('RoutingCtrl', function ($scope, $location, CategoryService) {
    $scope.getPage = function() {
      var path = CategoryService.getSelectedCategory().toLowerCase();
      $location.path(path);
      return;
    };
  });
