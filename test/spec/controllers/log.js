'use strict';

describe('Controller: LogCtrl', function() {

  // load the controller's module
  beforeEach(module('manipulateTextApp'));

  var LogCtrl, CategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoryCtrl = $controller('CategoryCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
    LogCtrl = $controller('LogCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
  }));

  it('Should category be "LOG". ', function() {
    expect(scope.isCategorySelected('LOG')).toBe(true);
  });
});
