'use strict';

angular.module('dtraceUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/trace', {
        templateUrl: 'app/trace/trace.html',
        controller: 'TraceCtrl'
      });
  });
