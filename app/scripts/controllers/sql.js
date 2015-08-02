'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:SqlCtrl
 * @description
 * # SqlCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('SqlCtrl', function ($scope, $log, CategoryService, SqlService, HistoryService, TextAreaService) {
    CategoryService.setCategory('SQL');
    $scope.submitWhereIn = function() {
      HistoryService.addHistory('SQL', $scope.sqlText);
      TextAreaService.setText('SQL', SqlService.getConvertedText($scope.sqlText, $scope.quotation));
    };
    $scope.$on('change_text', function(event, data) {
      $scope.sqlText = TextAreaService.getText('SQL');
    });
  });
