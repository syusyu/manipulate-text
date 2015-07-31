'use strict';

describe('Controller: SqlCtrl', function () {

  // load the controller's module
  beforeEach(module('manipulateTextApp'));

  var SqlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SqlCtrl = $controller('SqlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('Should category be "SQL". ', function() {
  //   expect(scope.isCategorySelected('SQL')).toBe(true);
  // });
});
