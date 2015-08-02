'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.HistoryService
 * @description
 * # HistoryService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('HistoryService', function ($rootScope, $cookieStore) {
    var MAX_HISTORY_SIZE = 10;
    var histmap = {'SQL' : [], 'LOG' : [], 'Others' : []};
    for (var key in histmap) {
      var loghiststr = $cookieStore.get('hist_' + key);
      histmap[key] = loghiststr ? loghiststr.toString().split('@@@') : [];
    }

    return {
      initHistory: function() {
        histmap = {'SQL' : [], 'LOG' : [], 'Others' : []};
      },

      clearHistory: function(category) {
        histmap[category] = [];
        $cookieStore.put('hist_' + category, []);
        $rootScope.$broadcast('change_history', '');
      },

      addHistory: function addHistory(category, text) {
        if (!text || !text.replace(/\s/g, "")) {
          return;
        }
        var history = [];
        history = histmap[category];
        var idx = histmap[category].indexOf(text);
        if (idx !== -1) {
          history.splice(idx, 1);
        } else {
          if (history.length > MAX_HISTORY_SIZE) {
            history.splice(0, 1);
          }
        }
        history.push(text.toString());
        $cookieStore.put('hist_' + category, history.join('@@@'));
        $rootScope.$broadcast('change_history', '');
      },

      getHistory: function getHistory(category) {
        return histmap[category];
      }
    };

  });
