'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:LogfilterCtrl
 * @description
 * # LogfilterCtrl
 * Controller of the manipulateTextApp
 */
 angular.module('manipulateTextApp')
   .controller('LogfilterCtrl', function ($scope, $log, LogfilterService) {
     $scope.submitLogFilter = function() {
       $scope.logText = LogfilterService.getFilteredLog($scope.logText, $scope.logRegexp, $scope.logContains);
     };
   });
