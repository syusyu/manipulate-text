'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.categoryService
 * @description
 * # categoryService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('CategoryService', function() {
    var selectedCategory = 'SQL';

    return {
      setCategory: function(category) {
        selectedCategory = category;
      },
      isCategorySelected: function(category) {
        return category === selectedCategory;
      }
    };
  });
