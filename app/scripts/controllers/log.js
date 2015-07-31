'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('LogCtrl', function ($scope, $log, CategoryService) {
    CategoryService.setCategory('LOG');
  });
