'use strict';

describe('Controller: LogfilterCtrl', function () {

  // load the controller's module
  beforeEach(module('manipulateTextApp'));

  var LogfilterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogfilterCtrl = $controller('LogfilterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(LogfilterCtrl.awesomeThings.length).toBe(3);
  });
});
