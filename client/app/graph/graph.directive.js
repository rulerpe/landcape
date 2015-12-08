'use strict';

angular.module('landscapeApp')
  .directive('graph', function (service) {
    return {
      templateUrl: 'app/graph/graph.html',
      restrict: 'EA',
      transclude: true,
      controller: function ($scope, $attrs, service) {
      	$scope.service = service;
      	$scope.year = 2015;
      }
    };
  });