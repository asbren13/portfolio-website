(function() {
    'use strict';

    angular
      .module('personalPortfolioApp', ['ngRoute'])
      .config(demoConfig);

    function demoConfig($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/jobs', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
})();

