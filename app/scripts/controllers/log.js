'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('LogCtrl', function ($scope, $log, CategoryService, LogfilterService, HistoryService, SharedDataService) {
    CategoryService.setCategory('LOG');
    $scope.logText = SharedDataService.getText(CategoryService.getSelectedCategory());
    $scope.logRegexp = SharedDataService.getFilterRegexp();
    $scope.logContains = SharedDataService.getFilterContains();

    $scope.submitLogFilter = function() {
      HistoryService.addHistory('LOG', $scope.logText);
      SharedDataService.setText('LOG', LogfilterService.getFilteredLog($scope.logText, $scope.logRegexp, $scope.logContains));
      SharedDataService.setFilterRegexp($scope.logRegexp);
      SharedDataService.setFilterContains($scope.logContains);
    };
    $scope.$on('change_text', function(event, data) {
      $scope.logText = SharedDataService.getText('LOG');
    });
  });
