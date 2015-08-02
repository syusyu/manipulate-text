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
    // var storedText = '';
    // var storedFilterstr = '';
    // var storedContains = true;
    // 
    // var s = function storeParams(text, filterstr, contains) {
    //   storedText = text;
    //   storedFilterstr = filterstr;
    //   storedContains = contains;
    // };

    var f = function logfilter(text, filterstr, contains) {

      // s(text, filterstr, contains);

      if (!text) {
        return '';
      }
      if (!filterstr) {
        return text;
      }

      //TODO think about empty lines

      var regexp = new RegExp(filterstr);
      text = text.replace(/\r\n|\r/g, "\n");
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
      // getText: function getText() {
      //   return storedText;
      // },
      // getFilterstr: function getFilterstr() {
      //   return storedFilterstr;
      // },
      // getContains: function getContains() {
      //   return storedContains;
      // },
      // storeParams: function storeParams(text, filterstr, contains) {
      //   s(text, filterstr, contains);
      // },
      getFilteredLog: function getFilteredLog(text, filterstr, contains) {
        return f(text, filterstr, contains);
      }
    };

  });
