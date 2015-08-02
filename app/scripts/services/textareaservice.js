'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.TextAreaService
 * @description
 * # TextAreaService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('TextAreaService', function ($rootScope) {
    var texts = {
      'SQL' : '', 'LOG' : '', 'Others' : ''
    };

    return {
      getText: function(category) {
        return texts[category];
      },
      setText: function(category, text) {
        texts[category] = text;
        $rootScope.$broadcast('change_text', category);
      }
    };
  });
