'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.LogfilterService
 * @description
 * # LogfilterService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('LogfilterService', function() {
    var f = function logfilter(text, filterstr, contains) {
      if (!text) {
        return '';
      }
      if (!filterstr) {
        return text;
      }

      //TODO think about empty lines

      var regexp = new RegExp(filterstr);
      var lines = text.split('\n');
      var result = '';
      for (var i = 0; i < lines.length; i++) {
        var matched = regexp.test(lines[i]);
        if (matched && contains || !matched && !contains) {
          result += lines[i] + '\n';
        }
      }
      result = result.slice(0, -1);
      return result;
    };

    return {
      getFilteredLog: function getFilteredLog(lines, regExp, contains) {
        return f(lines, regExp, contains);
      }
    };

  });
