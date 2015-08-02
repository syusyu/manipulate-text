'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:OthersCtrl
 * @description
 * # OthersCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('OthersCtrl', function ($scope, CategoryService, SortService, HistoryService, TextAreaService) {
    CategoryService.setCategory('Others');

    $scope.submitSort = function(order) {
      HistoryService.addHistory('Others', $scope.othersText);
      TextAreaService.setText('Others', SortService.getSortedText($scope.othersText, order));
    };
    $scope.$on('change_text', function(event, data) {
      $scope.othersText = TextAreaService.getText('Others');
    });
  });
