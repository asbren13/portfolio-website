'use strict';
angular.module('personalPortfolioApp').config(['$routeProvider', function($routeProvider){
  $routeProvider
   .when('/',{
      templateUrl: 'views/main.html',
      controller: 'HomeController'
    })
    .when('/about',{
      templateUrl: 'views/about.html',
      controller: 'AboutController',
      controllerAs: 'aboutController'
    })
    .when('/contact',{
      templateUrl: 'views/contact.html',
      controller: 'EmailController',
      controllerAs: 'emailController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
