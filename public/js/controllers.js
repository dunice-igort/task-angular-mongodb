'use strict';
/* Controllers */

var appControllers = angular.module('controllers', []);

appControllers.controller('commonCtrl', ['$scope', '$rootScope', '$http', '$location',
  function ($scope, $rootScope, $http, $location) {

  }
]);

appControllers.controller('dashboardCtrl', ['$scope', '$rootScope', '$http', '$location', 'store',
  function ($scope, $rootScope, $http, $location, store) {
    $scope.todos = [];
    $scope.getList = function () {
      store.getList(function (res) {
        $scope.todos = res
      })
    }
    $scope.getList()

    $scope.onCreate = function (title) {
      store.onCreate(function (res) {
        $scope.todos.push(res);
      }, title)
    };

    $scope.edit = function (idx) {
      $scope.todos[idx].disabled = true

    };

    $scope.onUpdate = function (todo, idx) {
      store.onUpdate(function (res) {
        todo.disabled = false
//        $scope.getList()
      }, todo)
    }

    $scope.onDelete = function (todo) {
      store.onDelete(function (res) {
        $scope.getList()
      }, todo)
    }
  }
]);