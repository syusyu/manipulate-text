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
       var regExp = '';
       var contains = true;
       $scope.logText = LogfilterService.getFilteredLog($scope.logText, regExp, contains);
     };
   });
