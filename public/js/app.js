'use strict';

/* App Module */

var app;
app = angular.module('app', [
  'ngRoute',
  'controllers',
  'services'
]);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);



