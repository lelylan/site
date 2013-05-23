'use strict';

angular.module('lelylan.dashboards.demo', ['lelylan.components.device']);

angular.module('lelylan.dashboards.demo').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', { templateUrl: '/views/devices.html', controller: DevicesCtrl }).
    when('/categories/:category', { templateUrl: '/views/devices.html', controller: CategoryCtrl }).
    otherwise({redirectTo: '/'});
}]);
