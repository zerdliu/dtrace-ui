'use strict';

angular.module('dtraceUiApp')
  .controller('QueryCtrl', ['$scope', '$http', function ($scope, $http) {

    // query init
    $scope.query = {} ;
    $scope.query.limit = 100;
    $scope.query.span = 'all';
    $scope.query.annotationQuery = '';
    $scope.traces = {};

    // get services 
    $http.get('/api/services')
    .success(function(data) {
      $scope.services = data ;  
    })
    .error(function(data, status) {
      console.log(status) ;
    });

    // set time now
    var now = new Date();
    $scope.query.enddate = now; 
    $scope.query.endtime = now.getHours() + ":" + now.getMinutes();

    // watch enddate & endtime , combine to end datetime
    $scope.$watch('query.enddate', function() {
       combineDateTime(); 
    });
    $scope.$watch('query.endtime', function() {
       combineDateTime(); 
    });

    function combineDateTime() {
      if($scope.query.enddate && $scope.query.endtime) {
        var enddate = $scope.query.enddate ; 
        
        var dateParts = [ enddate.getFullYear(), enddate.getMonth(), enddate.getDate()] ; 
        var timeParts = $scope.query.endtime.split(':');
        $scope.query.end = new Date(Date.UTC.apply(undefined,dateParts.concat(timeParts)));
      }
    };

    // search traces 
    $scope.search = function(query) {
      $http.get('/api/query', { 
        params: { 
          serviceName : query.service ,
          spanName : query.span ,
          timestamp : query.end.getTime(), 
          limit : query.limit, 
          annotationQuery : query.annotationQuery,
        } 
      })
      .success(function(data) {
        $scope.traces = data ; 
        console.log(data);
      })
      .error(function(status) {
        console.log(status);
      });
    };
  }]);
