'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:LogfilterCtrl
 * @description
 * # LogfilterCtrl
 * Controller of the manipulateTextApp
 */
 angular.module('manipulateTextApp')
   .controller('LogfilterCtrl', function ($scope, $log, LogfilterService, HistoryService, TextAreaService) {
     $scope.submitLogFilter = function() {
       HistoryService.addHistory('LOG', $scope.logText);
       TextAreaService.setText('LOG', LogfilterService.getFilteredLog($scope.logText, $scope.logRegexp, $scope.logContains));
     };
     $scope.$on('change_text', function(event, data) {
       $scope.logText = TextAreaService.getText('LOG');
     });
   });
