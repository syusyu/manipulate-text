'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:SqlCtrl
 * @description
 * # SqlCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('SqlCtrl', function ($scope, $log, CategoryService, SqlService, HistoryService, SharedDataService) {
    CategoryService.setCategory('SQL');
    $scope.sqlText = SharedDataService.getText(CategoryService.getSelectedCategory());
    $scope.quotation = SharedDataService.getSqlQuotation();

    $scope.submitWhereIn = function() {
      HistoryService.addHistory('SQL', $scope.sqlText);
      SharedDataService.setText('SQL', SqlService.getConvertedText($scope.sqlText, $scope.quotation));
      SharedDataService.setSqlQuotation($scope.quotation);
    };
    $scope.$on('change_text', function(event, data) {
      $scope.sqlText = SharedDataService.getText('SQL');
    });
  });
