'use strict';

describe('Controller: OthersCtrl', function () {

  // load the controller's module
  beforeEach(module('manipulateTextApp'));

  var OthersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OthersCtrl = $controller('OthersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('Should category be "Others". ', function() {
  //   expect(scope.isCategorySelected('Others')).toBe(true);
  // });
});
