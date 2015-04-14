"use strict";function EmailFactory(a){function b(b){return a.post("https://portfoliositeapi.herokuapp.com/email",b)}return{sendEmail:b}}function homeController(){}function navbarController(){}function footerController(){}function aboutController(){}function emailController(a){var b=this;b.sendEmail=function(c){a.sendEmail(c).then(function(){console.log("email sent!")}),b.email={}}}function contactController(){}angular.module("personalPortfolioApp",["ngRoute","MainController","MainDirective"]),angular.module("personalPortfolioApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"HomeController"}).when("/about",{templateUrl:"views/about.html",controller:"AboutController",controllerAs:"aboutController"}).when("/contact",{templateUrl:"views/contact.html",controller:"EmailController",controllerAs:"emailController"}).otherwise({redirectTo:"/"})}]),angular.module("personalPortfolioApp").factory("EmailFactory",EmailFactory),EmailFactory.$inject=["$http"],angular.module("MainController",[]),angular.module("MainController").controller("HomeController",homeController),homeController.$inject=[],angular.module("MainController").controller("NavbarController",navbarController),navbarController.$inject=[],angular.module("MainController").controller("FooterController",footerController),footerController.$inject=[],angular.module("MainController").controller("AboutController",aboutController),aboutController.$inject=[],angular.module("MainController").controller("EmailController",emailController),emailController.$inject=["EmailFactory"],angular.module("MainController").controller("ContactController",contactController),contactController.$inject=[],angular.module("MainDirective",[]),angular.module("MainDirective").directive("abNavbar",[function(){return{restrict:"E",templateUrl:"views/partials/navbar.html",controller:"NavbarController",controllerAs:"navbarController",bindToController:!0,scope:{},link:function(){}}}]),angular.module("MainDirective").directive("abFooter",[function(){return{restrict:"E",templateUrl:"views/partials/footer.html",controller:"FooterController",controllerAs:"footerController",bindToController:!0,scope:{},link:function(){}}}]);