'use strict';

angular.module('dtraceUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/trace/:id', {
        templateUrl: 'app/trace/trace.html',
        controller: 'TraceCtrl'
      });
  });
