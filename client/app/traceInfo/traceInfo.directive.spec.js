'use strict';

describe('Directive: traceInfo', function () {

  // load the directive's module and view
  beforeEach(module('dtraceUiApp'));
  beforeEach(module('app/traceInfo/traceInfo.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<trace-info></trace-info>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the traceInfo directive');
  }));
});