'use strict';

describe('Controller: HistogramCtrl', function () {

  // load the controller's module
  beforeEach(module('dtraceUiApp'));

  var HistogramCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistogramCtrl = $controller('HistogramCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
