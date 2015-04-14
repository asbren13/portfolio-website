'use strict';
angular.module('MainController').controller('EmailController', emailController);
emailController.$inject = ['EmailFactory'];

function emailController(EmailFactory){
  debugger;
  var vm = this;

  vm.sendEmail = function(email){
    EmailFactory.sendEmail(email).then(function(){
      console.log('email sent!');
    });
    vm.email = {};
  };
}
