'use strict';

describe('Service: TextAreaService', function () {

  // load the service's module
  beforeEach(module('manipulateTextApp'));

  // instantiate service
  var TextAreaService;
  beforeEach(inject(function (_TextAreaService_) {
    TextAreaService = _TextAreaService_;
  }));

  it('should do something', function () {
    expect(!!TextAreaService).toBe(true);
  });

});
