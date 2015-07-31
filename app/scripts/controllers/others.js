'use strict';

/**
 * @ngdoc function
 * @name manipulateTextApp.controller:OthersCtrl
 * @description
 * # OthersCtrl
 * Controller of the manipulateTextApp
 */
angular.module('manipulateTextApp')
  .controller('OthersCtrl', function ($scope, CategoryService) {
    CategoryService.setCategory('Others');
  });
