'use strict';

angular.module('dtraceUiApp')
  .directive('traceInfo', function () {
    return {
      templateUrl: 'app/traceInfo/traceInfo.html',
      restrict: 'EA',
      scope: {
        traces: '='
      },
      controller: function($scope) {
        $scope.setOrder = function (order) {
          $scope.order = order;
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
