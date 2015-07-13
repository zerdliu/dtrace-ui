'use strict';
angular.module('dtraceUiApp')
  .directive('calHeatmap', function () {
    return {
      template: '<div class="cal-heatmap" config="config"></div>',
      restrict: 'EA',
      link: link,
      scope: {
          config: '='
      }
    };
    function link(scope, el) {
      var config = scope.config || {};
      var element = el[0];
      var cal = new CalHeatMap();
      var defaults = {
        itemSelector: element,
        //domain: 'day',
        //subDomain: 'min',
        //subDomainTextFormat: '%d',
        //data: '',
        start: ( new Date() - 3600 * 1000 * 12),
        //cellSize: 25,
        //range: 1,
        //domainGutter: 10,
        //legend: [2, 4, 6, 8, 10],
        //itemName: 'item'
      };
      angular.extend(defaults, config);
      cal.init(defaults);
    }
});
