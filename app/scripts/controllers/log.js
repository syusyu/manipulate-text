'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('LogCtrl', function ($scope, $log, CategoryService, LogfilterService) {
    $scope.logText = LogfilterService.getText();
    $scope.logRegexp = LogfilterService.getFilterstr();
    $scope.logContains = LogfilterService.getContains();
    CategoryService.setCategory('LOG');
  });
