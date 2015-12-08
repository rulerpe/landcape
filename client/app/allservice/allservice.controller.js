'use strict';

angular.module('landscapeApp')
  .controller('AllserviceCtrl', function ($scope, service, property,$stateParams) {
    $scope.propertyId = $stateParams.propertyId;
    $scope.service = service;
    $scope.currentAddress = $stateParams.propertyAdd;
    $scope.service.getAllServices($scope.propertyId);
    $scope.adding = false;
    $scope.showGraph = false;
    $scope.newService = {
    	title: "",
    	date: "",
    	timeSpent: "",
    	name: "",
    	propertyId: "",
    };
    $scope.addNewservice = function(){
    	$scope.newService.propertyId = $scope.propertyId;
    	$scope.service.addNewservice($scope.newService);
    	$scope.newService = {
	    	title: "",
	    	date: "",
	    	timeSpent: "",
	    	name: "",
    		propertyId: "",
	    };
	    $scope.adding = false;
    }
    $scope.cancel = function(){
    	$scope.adding = false
    }
  });
