'use strict';

angular.module('dtraceUiApp')
  .controller('QueryCtrl', ['$scope', '$http', function ($scope, $http) {

    // query init
    $scope.query = {};
    $scope.query.limit = 100;
    //$scope.query.enddate = new Date();
    //$scope.query.endtime = new Date();
    //$scope.query.end = new Date();
    $scope.query.span = 'all';
    $scope.query.annotationQuery = '';
    $scope.traces = {};

    // get services 
    $http.get('/api/services')
    .success(function (data) {
      $scope.services = data;
    })
    .error(function (data, status) {
    });

    // search traces 
    $scope.search = function (query) {
      $http.get('/api/query', {
        params: {
          serviceName: query.service,
          spanName: query.span,
          timestamp: query.end.getTime(),
          limit: query.limit,
          annotationQuery: query.annotationQuery
        } 
      })
      .success(function (data) {
        $scope.traces = data;
      })
      .error(function (status) {
      });
    };
  }]);
