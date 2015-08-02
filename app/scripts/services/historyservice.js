'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.HistoryService
 * @description
 * # HistoryService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('HistoryService', function ($rootScope) {
    var MAX_HISTORY_SIZE = 10;
    var histmap = {'SQL' : [], 'LOG' : [], 'Others' : []};
    return {
      addHistory: function addHistory(category, text) {
        if (!text) {
          return;
        }
        var history = [];
        history = histmap[category];
        var idx = histmap[category].indexOf(text);
        if (idx != -1) {
          history.splice(idx, 1);
        } else {
          if (history.length > MAX_HISTORY_SIZE) {
            history.splice(0, 1);
          }
        }
        history.push(text.toString());
        $rootScope.$broadcast('change_history', '');
      },
      getHistory: function getHistory(category) {
        return histmap[category];
      }
    };

  });
