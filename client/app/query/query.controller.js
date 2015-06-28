'use strict';

angular.module('dtraceUiApp')
  .controller('QueryCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://dtrace.baidu.com/api/services')
    .success(function(data) {
      $scope.services = data ;  
	    console.log("liuzhuo");
      console.log(data);
    })
    .error(function(data, status) {
      console.log(status) ;
    });

    $scope.service= {};
//  $scope.services= [ 
//      {name: 'pr-nginx'},
//      {name: 'ui'},
//      {name: 'ac'}
//    ];
  }]);
