'use strict';

/**
 * @ngdoc function
 * @name userListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the userListApp
 */
angular.module('userListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
