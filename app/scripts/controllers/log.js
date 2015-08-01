'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('LogCtrl', function ($scope, $log, CategoryService) {
    if (!$scope.logContains) {
      $scope.logContains = true;
    }
    CategoryService.setCategory('LOG');
  });
