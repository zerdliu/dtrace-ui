'use strict';

angular.module('dtraceUiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'angularMoment',
  'nvd3',
  'ui.select'
])
  .config(function ($httpProvider, $routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  })
  .config(function (uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = false;
    uiSelectConfig.appendToBody = true;
  });
