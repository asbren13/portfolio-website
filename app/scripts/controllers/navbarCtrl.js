(function() {
    'use strict';

    angular
        .module('personalPortfolioApp')
        .controller('NavbarCtrl', NavbarCtrl);

    NavbarCtrl.$inject = ['$location'];

    function NavbarCtrl($location) {
        var vm = this;

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }
})();
