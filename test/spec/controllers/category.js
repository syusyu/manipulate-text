'use strict';

describe('Controller: CategoryCtrl', function() {

  // load the controller's module
  beforeEach(module('manipulateTextApp'));

  var CategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoryCtrl = $controller('CategoryCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
  }));

  it('At first, selected category should be "SQL"', function() {
    expect(scope.isCategorySelected('SQL')).toBe(true);
  });
});
