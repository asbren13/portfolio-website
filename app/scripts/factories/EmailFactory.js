'use strict';

angular.module('personalPortfolioApp')
       .factory('EmailFactory', EmailFactory);

EmailFactory.$inject = ['$http'];

function EmailFactory($http){
  function sendEmail(email){
    debugger;
    return $http.post('https://portfoliositeapi.herokuapp.com/email', email);
  }

  return{
    sendEmail: sendEmail
  };
}
