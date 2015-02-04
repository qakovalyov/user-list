'use strict';

/**
 * @ngdoc function
 * @name userListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the userListApp
 */
angular.module('userListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
