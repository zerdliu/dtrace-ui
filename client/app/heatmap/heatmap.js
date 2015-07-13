'use strict';

angular.module('dtraceUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/heatmap', {
        templateUrl: 'app/heatmap/heatmap.html',
        controller: 'HeatmapCtrl'
      });
  });
