'use strict';

describe('Controller: HeatmapCtrl', function () {

  // load the controller's module
  beforeEach(module('dtraceUiApp'));

  var HeatmapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeatmapCtrl = $controller('HeatmapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
