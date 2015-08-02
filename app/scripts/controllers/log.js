'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('LogCtrl', function ($scope, $log, CategoryService, LogfilterService, HistoryService, TextAreaService) {
    $scope.logText = LogfilterService.getText();
    $scope.logRegexp = LogfilterService.getFilterstr();
    $scope.logContains = LogfilterService.getContains();
    CategoryService.setCategory('LOG');

    $scope.submitLogFilter = function() {
      HistoryService.addHistory('LOG', $scope.logText);
      TextAreaService.setText('LOG', LogfilterService.getFilteredLog($scope.logText, $scope.logRegexp, $scope.logContains));
    };
    $scope.$on('change_text', function(event, data) {
      $scope.logText = TextAreaService.getText('LOG');
    });
  });
