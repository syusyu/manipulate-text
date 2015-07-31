'use strict';

describe('Service: LogfilterService', function () {

  // load the service's module
  beforeEach(module('manipulateTextApp'));

  // instantiate service
  var LogfilterService;
  beforeEach(inject(function (_LogfilterService_) {
    LogfilterService = _LogfilterService_;
  }));

  var fixtures = [
    // //0
    // { text: '', regExp: '', contains: true, expected: '' },
    // { text: '', regExp: '', contains: false, expected: '' },
    // { text: 'aaabbbccc', regExp: '', contains: true, expected: 'aaabbbccc' },
    // { text: 'aaabbbccc', regExp: '', contains: false, expected: 'aaabbbccc' },
    // { text: 'aaabbbccc', regExp: 'aaa', contains: true, expected: 'aaabbbccc' },
    // //5
    // { text: 'aaabbbccc', regExp: 'aaa', contains: false, expected: '' },
    // { text: 'aaabbbccc', regExp: 'aaabbbcccddd', contains: true, expected: '' },
    { text: 'aaabbbccc', regExp: 'aaabbbcccddd', contains: false, expected: 'aaabbbccc' },
    // { text: 'aaabbbccc', regExp: '^aaa', contains: true, expected: 'aaabbbccc' },
    // { text: 'aaabbbccc', regExp: '^aaa', contains: false, expected: '' },
    // //10
    // { text: '', regExp: '', contains: true, expected: '' },
  ];
  fixtures.forEach(function(fixture, idx) {
    it('filter test ' + idx, function () {
      expect(LogfilterService.getFilteredLog(fixture.text, fixture.regExp, fixture.contains)).toBe(fixture.expected);
    });
  });

});
