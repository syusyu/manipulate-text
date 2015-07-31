'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('CategoryCtrl', function ($scope, $log, CategoryService) {
    $scope.isCategorySelected = function(category) {
      return CategoryService.isCategorySelected(category);
    };
  });
