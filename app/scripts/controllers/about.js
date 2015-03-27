'use strict';

/**
 * @ngdoc function
 * @name personalPortfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personalPortfolioApp
 */
angular.module('personalPortfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
