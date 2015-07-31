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

      var regexp = new RegExp(filterstr);
      var newlines = [];
      var lines = text.split('\n');
      var i;
      for (i = 0; i < lines.length; i++) {
        console.log('regexp=' + regexp.test(lines[i]) + ', contains=' + contains);
        if (!(regexp.test(lines[i]) ^ contains)) {
          console.log('did!')
          newlines.push(lines[i]);
        }
      }
      console.log(newlines);
      var result = '';
      for (i = 0; i < newlines.length; i++) {
        result += newlines[i] + '\n';
      }
      result = result.slice(0, -1);
      console.log(result);
      return result;
    };



    return {
      getFilteredLog: function getFilteredLog(lines, regExp, contains) {
        return f(lines, regExp, contains);
      }
    };

  });
