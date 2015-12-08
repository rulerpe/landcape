'use strict';

describe('Service: property', function () {

  // load the service's module
  beforeEach(module('landscapeApp'));

  // instantiate service
  var property;
  beforeEach(inject(function (_property_) {
    property = _property_;
  }));

  it('should do something', function () {
    expect(!!property).toBe(true);
  });

});
