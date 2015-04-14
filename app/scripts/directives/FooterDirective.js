'use strict';
angular.module('MainDirective').directive('abFooter', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/partials/footer.html',
    controller: 'FooterController',
    controllerAs: 'footerController',
    bindToController: true,
    scope: {},
    link: function($scope,element,attrs){
      // manipulate the dom here.
    }
  };
}]);
