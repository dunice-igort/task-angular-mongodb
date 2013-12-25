'use strict';

/* Services */


var services = angular.module('services', ['ngResource']);

services.factory('store', ['$http',
  function ($http) {
    return {
      getList: function (callback) {
        $http.get('/dashboard/list')
          .success(function (data, status, headers, config) {
            console.log('SUCCESS GET ALL', data)
            callback(data)
          }).error(function (data, status, headers, config) {
            console.log('error GET ALL', data);
          });
      }, onCreate: function (callback, title) {
        $http.post('/dashboard/', {
          title: title
        }).success(function (data, status, headers, config) {
            console.log('SUCCESS ADD', data)
            callback(data)
          }).error(function (data, status, headers, config) {
            console.log('error ADD', data);
          });
      }, onUpdate: function (callback, todo) {
        $http.put('/dashboard/', {
          title: todo.title, id: todo._id, checkbox: todo.checkbox, checkbox2: todo.checkbox2, checkbox3: todo.checkbox3, radiocheck: todo.radiocheck
        }).success(function (data, status, headers, config) {
            console.log('SUCCESS update TODO', data)
            callback(data)
          }).error(function (data, status, headers, config) {
            console.log('error update TODO', data);
          });
      }, onDelete: function (callback, todo) {
        $http.delete('/dashboard/'+todo._id).success(function (data, status, headers, config) {
            console.log('SUCCESS delete TODO', data)
            callback(data)
          }).error(function (data, status, headers, config) {
            console.log('error delete TODO', data);
          });
      }
    }
  }]);

