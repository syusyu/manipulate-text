'use strict';

describe('Service: SortService', function () {

  // load the service's module
  beforeEach(module('manipulateTextApp'));

  // instantiate service
  var SortService;
  beforeEach(inject(function (_SortService_) {
    SortService = _SortService_;
  }));

  var fixtures = [
    { input: 'aaaa\nbbbb\ncccc', expected: 'aaaa\nbbbb\ncccc\n', expected_rev: 'cccc\nbbbb\naaaa\n', },
    { input: 'aaaa', expected: 'aaaa\n', expected_rev: 'aaaa\n', },
    { input: '', expected: '', expected_rev: '', },
    { input: '090\n100\n5', expected: '090\n100\n5\n', expected_rev: '5\n100\n090\n', },
  ];
  fixtures.forEach(function(fixture, idx) {
    it('sort' + idx, function () {
      expect(SortService.getSortedText(fixture.input)).toBe(fixture.expected);
    });
    it('sort reverse' + idx, function () {
      expect(SortService.getSortedText(fixture.input, 'reverse')).toBe(fixture.expected_rev);
    });
  });

});
