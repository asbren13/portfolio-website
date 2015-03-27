(function() {
    'use strict';

    angular
      .module('personalPortfolioApp')
        .controller('FooterCtrl', FooterCtrl);

    FooterCtrl.$inject = ['$location'];

    function FooterCtrl($location) {
        var vm = this;

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }
})();
