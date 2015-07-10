'use strict';

angular.module('dtraceUiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.select',
  'ui.bootstrap.datetimepicker',
  'datePicker'
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
