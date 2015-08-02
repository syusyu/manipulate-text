'use strict';

/**
 * @ngdoc service
 * @name manipulateTextApp.SqlService
 * @description
 * # SqlService
 * Service in the manipulateTextApp.
 */
angular.module('manipulateTextApp')
  .service('SqlService', function () {
    var QUOTATION_TYPE = {
      AUTO: 0,
      QUOTATION: 1,
      NOT_QUOTATION: 2,
    };

    var isQuotationNecessary = function(quotationType, lines) {
      if (quotationType === QUOTATION_TYPE.QUOTATION) {
        return true;
      } else if (quotationType === QUOTATION_TYPE.NOT_QUOTATION) {
        return false;
      } else {
        for (var i = 0; i < lines.length; i++) {
          if (isNaN(lines[i])) {
            return true;
          }
        }
      }
      return false;
    };

    return {
      getQuotationType: function() {
        return QUOTATION_TYPE;
      },
      getConvertedText: function(text, quotationType) {
        if (!text || !text.replace(/\s/g, "")) {
          return text;
        }
        text = text.replace(/\r\n|\r/g, "\n");

        var result = '';
        var lines = text.split(/\n|\t|,|\s+/);
        var putsQuotation = isQuotationNecessary(quotationType, lines);

        for (var i = 0; i < lines.length; i++) {
          if (lines[i].replace(/\s/g, "")) {
            result += putsQuotation ? "'" : "";
            result += lines[i];
            result += putsQuotation ? "', " : ", ";
          }
        }
        result = 'where   in (' + result.slice(0, -2) + ')';
        return result;
      },
    };
  });
