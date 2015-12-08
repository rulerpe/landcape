'use strict';

angular.module('landscapeApp')
  .factory('property', function ($http, Auth) {
    var properties = {
      allPropertyies: [],
    }

    properties.getAllProperties = function(){
      properties.allPropertyies = []
      return $http.get('api/propertys', {
        headers: {'Authorization': 'Bearer '+Auth.getToken()}
      }).success(function(data){
        properties.allPropertyies = data;
      })
    }

    properties.createProperty = function(address){
      return $http.post('api/propertys',{address: address},{
        headers: {'Authorization': 'Bearer '+Auth.getToken()}
      }).success(function(data){
        properties.getAllProperties();
      })
    }
    return properties;
  });
