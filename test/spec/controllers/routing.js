'use strict';

describe('Controller: RoutingCtrl', function () {

  // load the controller's module
  beforeEach(module('manipulateTextApp'));

  var RoutingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoutingCtrl = $controller('RoutingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(RoutingCtrl.awesomeThings.length).toBe(3);
  // });
});
