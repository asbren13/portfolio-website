!function(){"use strict";function a(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/jobs",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}angular.module("personalPortfolioApp",["ngRoute"]).config(a),a.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("personalPortfolioApp").controller("MainCtrl",MainCtrl)}(),angular.module("personalPortfolioApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),function(){"use strict";function a(a){var b=this;b.isActive=function(b){return b===a.path()}}angular.module("personalPortfolioApp").controller("NavbarCtrl",a),a.$inject=["$location"]}(),function(){"use strict";function a(a){var b=this;b.isActive=function(b){return b===a.path()}}angular.module("personalPortfolioApp").controller("FooterCtrl",a),a.$inject=["$location"]}();