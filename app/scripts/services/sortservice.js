'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.SortService
 * @description
 * # SortService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('SortService', function() {

    var f = function(text, order) {
      if (!text) {
        return text;
      }
      text = text.replace(/\r\n|\r/g, "\n");

      var list = [];
      list = text.split("\n");
      list.sort();
      if (order === 'reverse') {
        list.reverse();
      }

      var result = "";
      for (var i = 0; i < list.length; i++) {
        result += list[i] + "\n";
      }
      result = result.replace(/^\s*\n/g, "");
      return result;
    };

    return {
      getSortedText: function(text, order) {
        return f(text, order);
      }
    };
  });
