'use strict';

describe('Service: SqlService', function () {

  // load the service's module
  beforeEach(module('manipulateTextApp'));

  // instantiate service
  var SqlService;
  beforeEach(inject(function (_SqlService_) {
    SqlService = _SqlService_;
  }));

  var fixtures = [
    //0
    {text: '1 2 3', quotation_type: '0', expected: "where   in (1, 2, 3)"},
    {text: '1', quotation_type: '0', expected: "where   in (1)"},
    {text: 'a1 2 3', quotation_type: '0', expected: "where   in ('a1', '2', '3')"},
    {text: 'a1 ', quotation_type: '0', expected: "where   in ('a1')"},
    {text: ' ', quotation_type: '0', expected: " "},
    //5
  ];

  fixtures.forEach(function(fixture, idx) {
    it('SQL Convertion' + idx, function () {
      expect(SqlService.getConvertedText(fixture.text, fixture.quotation_type)).toBe(fixture.expected);
    });
  });

});
