'use strict';

describe('Service: CategoryService', function () {

  // load the service's module
  beforeEach(module('manipulateTextApp'));

  // instantiate service
  var CategoryService;
  beforeEach(inject(function (_CategoryService_) {
    CategoryService = _CategoryService_;
  }));

  it('should exists CategoryService', function () {
    expect(!!CategoryService).toBe(true);
  });

  it('Should be "Others" after selecting "Others"', function() {
    CategoryService.setCategory('Others');
    expect(CategoryService.isCategorySelected('Others')).toBe(true);
  });
});
