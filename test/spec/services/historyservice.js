'use strict';

describe('Service: HistoryService', function () {

  // load the service's module
  beforeEach(module('manipulateTextApp'));

  // instantiate service
  var HistoryService;
  beforeEach(inject(function (_HistoryService_) {
    HistoryService = _HistoryService_;
  }));

  var fixtures = [
    //0
    {init: ['1', '2', '3'], add: '4', expected: ['1', '2', '3', '4']},
    {init: ['1', '2', '3'], add: '3', expected: ['1', '2', '3']},
    {init: ['1', '2', '3'], add: '2', expected: ['1', '3', '2']},
    {init: ['1', '2', '3'], add: '1', expected: ['2', '3', '1']},
    {init: [], add: ['3'], expected: ['3']},
    //5
    {},
  ];

  fixtures.forEach(function(fixture, idx) {
    if (!fixture.init) {
      return;
    }
    it('Adding history' + idx, function () {
      HistoryService.initHistory();
      fixture.init.forEach(function(val){
        HistoryService.addHistory('SQL', val);
      });
      HistoryService.addHistory('SQL', fixture.add);
      expect(HistoryService.getHistory('SQL')).toEqual(fixture.expected);
    });
  });

});
