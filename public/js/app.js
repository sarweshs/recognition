'use strict';


// Declare app level module which depends on filters, and services
/* angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.report_controller',
  'myApp.report_service'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'ReportController'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'ReportController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]); */
var App = angular.module('myApp',['zingchart-angularjs']);
