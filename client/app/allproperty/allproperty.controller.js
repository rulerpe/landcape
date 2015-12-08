'use strict';

angular.module('landscapeApp')
  .controller('AllpropertyCtrl', function ($scope, property) {
    $scope.property = property;
    $scope.property.getAllProperties();
    $scope.addNewProperty = function(){
    	$scope.property.createProperty($scope.newAddess);
    	$scope.newAddess = "";
    }
  });
