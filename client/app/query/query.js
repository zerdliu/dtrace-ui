'use strict';

angular.module('dtraceUiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/query', {
        templateUrl: 'app/query/query.html',
        controller: 'QueryCtrl'
      });
  });
