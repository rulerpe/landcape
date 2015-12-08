'use strict';

describe('Controller: AllserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('landscapeApp'));

  var AllserviceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllserviceCtrl = $controller('AllserviceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
