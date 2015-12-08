'use strict';

angular.module('landscapeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allproperty', {
        url: '/allproperty',
        templateUrl: 'app/allproperty/allproperty.html',
        controller: 'AllpropertyCtrl'
      });
  });