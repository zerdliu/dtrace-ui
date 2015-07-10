'use strict';

angular.module('dtraceUiApp')
  .directive('traceInfo', function () {
    return {
      templateUrl: 'app/traceInfo/traceInfo.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });