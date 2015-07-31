'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:SqlCtrl
 * @description
 * # SqlCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('SqlCtrl', function ($scope, $log, CategoryService) {
    CategoryService.setCategory('SQL');
  });
