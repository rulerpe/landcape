'use strict';

describe('Controller: AllpropertyCtrl', function () {

  // load the controller's module
  beforeEach(module('landscapeApp'));

  var AllpropertyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllpropertyCtrl = $controller('AllpropertyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
