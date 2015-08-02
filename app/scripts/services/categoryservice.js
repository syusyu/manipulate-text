'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.categoryService
 * @description
 * # categoryService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('CategoryService', function($rootScope, $cookieStore) {

    var selectedCategory = $cookieStore.get('category');
    if (!selectedCategory) {
      selectedCategory = 'SQL';
    }

    return {
      getSelectedCategory: function() {
        return selectedCategory;
      },
      setCategory: function(category) {
        selectedCategory = category;
        $cookieStore.put('category', category);
        $rootScope.$broadcast('change_category', selectedCategory);
      },
      isCategorySelected: function(category) {
        return category === selectedCategory;
      }
    };
  });
