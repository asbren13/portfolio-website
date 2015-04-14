'use strict';
angular.module('MainDirective').directive('abNavbar', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/partials/navbar.html',
    controller: 'NavbarController',
    controllerAs: 'navbarController',
    bindToController: true,
    scope: {},
    link: function($scope,element,attrs){
      // manipulate the dom here.
    }
  };
}]);
