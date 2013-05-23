'use strict';

function DashboardCtrl($scope, $rootScope) {
  $rootScope.active = '';
};

DashboardCtrl.$inject = ['$scope', '$rootScope'];

var cl = new CanvasLoader('lelylan-request-loading');
cl.setColor('#239cbb');
cl.setShape('spiral');
cl.setDiameter(20);
cl.setDensity(70);
cl.setRange(0.7);
cl.setSpeed(2);
cl.setFPS(35);
cl.show();
