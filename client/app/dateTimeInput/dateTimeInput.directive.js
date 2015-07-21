'use strict';

angular.module('dtraceUiApp')
  .directive('dateTimeInput', dateTimeInput ); 

// directive function
function dateTimeInput() {
  return {
    templateUrl: 'app/dateTimeInput/dateTimeInput.html',
    restrict: 'EA',
    scope: {
      enddate: '=',
      endtime: '=',
      end: '='
    },
    controller: controller,
  };
}

// controller function
controller.$inject = ['$scope'];

function controller($scope) {

  // add watch list : watch enddate & endtime , combine to end datetime
  $scope.$watch('enddate', function () {
     combineDateTime();
  });
  $scope.$watch('endtime', function () {
     combineDateTime();
  });

  // set time now
  var now = new Date();
  $scope.enddate = $scope.enddate || ( now.getFullYear() + "-" + ( now.getMonth() + 1 ) + "-" + now.getDate() );
  $scope.endtime = $scope.endtime || ( now.getHours() + ":" + now.getMinutes()) ;

  function combineDateTime() {
    if($scope.enddate && $scope.endtime) {
      var enddate = $scope.enddate ; 

      if ( enddate instanceof Date ) {
        var dateParts = [ enddate.getFullYear(), enddate.getMonth(), enddate.getDate() ];
      } else {
        var dateParts = $scope.enddate.split('-');
        dateParts[1] -= 1;
      }

      var timeParts = $scope.endtime.split(':');
      $scope.end = new Date(Date.UTC.apply(undefined, dateParts.concat(timeParts)));
    }
  }

  $scope.open = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
  
    $scope.opened = true;
  };
}
