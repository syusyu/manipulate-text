'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:OthersCtrl
 * @description
 * # OthersCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('OthersCtrl', function($rootScope, $scope, CategoryService, SortService, HistoryService, SharedDataService) {
    CategoryService.setCategory('Others');
    $scope.othersText = SharedDataService.getText(CategoryService.getSelectedCategory());

    $scope.submitSort = function(order) {
      HistoryService.addHistory('Others', $scope.othersText);
      SharedDataService.setText('Others', SortService.getSortedText($scope.othersText, order));
    };

    $scope.clearText = function() {
      $scope.othersText = '';
    };

    $scope.$on('change_text', function(event, data) {
      $scope.othersText = SharedDataService.getText('Others');
    });
  });
