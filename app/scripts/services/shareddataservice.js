'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.SharedDataService
 * @description
 * # SharedDataService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('SharedDataService', function ($rootScope) {
    var texts = {
      'SQL' : '', 'LOG' : '', 'Others' : ''
    };
    var filterRegexp = '';
    var filterContains = true;
    var sqlQuotation = 0;

    return {
      getText: function(category) {
        return texts[category];
      },
      setText: function(category, text) {
        texts[category] = text;
        $rootScope.$broadcast('change_text', category);
      },
      getFilterRegexp: function() {
        return filterRegexp;
      },
      setFilterRegexp: function(val) {
        filterRegexp = val;
      },
      getFilterContains: function() {
        return filterContains;
      },
      setFilterContains: function(val) {
        filterContains = val;
      },
      getSqlQuotation: function() {
        return sqlQuotation;
      },
      setSqlQuotation: function(val) {
        setSqlQuotation = val;
      },
    };
  });
