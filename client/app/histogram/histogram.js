'use strict';

angular.module('dtraceUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/histogram', {
        templateUrl: 'app/histogram/histogram.html',
        controller: 'HistogramCtrl'
      });
  });
