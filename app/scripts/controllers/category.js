'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('CategoryCtrl', function($scope, $log, CategoryService, HistoryService, TextAreaService) {
    $scope.$on('change_category', function(event, data) {
      $scope.history = HistoryService.getHistory(CategoryService.getSelectedCategory());
    });
    $scope.$on('change_history', function(event, data) {
      $scope.history = HistoryService.getHistory(CategoryService.getSelectedCategory());
    });
    $scope.isCategorySelected = function(category) {
      return CategoryService.isCategorySelected(category);
    };
    $scope.restoreTextFromHistory = function(text) {
      TextAreaService.setText(CategoryService.getSelectedCategory(), text);
    };
  });
