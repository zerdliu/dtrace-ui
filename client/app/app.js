'use strict';

angular.module('dtraceUiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.select',
  'datePicker'
])
  .config(function ($httpProvider, $routeProvider, $locationProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
