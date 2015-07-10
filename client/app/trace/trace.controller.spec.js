'use strict';

describe('Controller: TraceCtrl', function () {

  // load the controller's module
  beforeEach(module('dtraceUiApp'));

  var TraceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TraceCtrl = $controller('TraceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
