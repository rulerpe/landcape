'use strict';

angular.module('landscapeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allservice', {
        url: '/allservice:propertyId/:propertyAdd',
        templateUrl: 'app/allservice/allservice.html',
        controller: 'AllserviceCtrl'
      });
  });