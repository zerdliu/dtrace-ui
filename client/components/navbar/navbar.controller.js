'use strict';

angular.module('dtraceUiApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Find a trace',
      'link': '/query'
    },
    {
      'title': 'Histogram',
      'link': '/histogram'
    },
    {
      'title': 'Heatmap',
      'link': '/heatmap'
    },
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
