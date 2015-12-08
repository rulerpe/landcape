'use strict';

angular.module('landscapeApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.auth = Auth;
  });
