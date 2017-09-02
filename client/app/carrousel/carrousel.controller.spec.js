'use strict';

describe('Component: CarrouselComponent', function () {

  // load the controller's module
  beforeEach(module('bootstrapApp'));

  var CarrouselComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CarrouselComponent = $componentController('carrousel', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
