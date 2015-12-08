'use strict';

angular.module('landscapeApp')
  .factory('service', function ($http, Auth) {
    var service = {
      servicesList: [],
      currentAddress: "",
      graphArr: [[],[],[],[]],
    };
    service.getAllServices = function(propertyId){
      service.servicesList= [];
      return $http.get("api/services",{
        params: {id :propertyId },
        headers: {'Authorization': 'Bearer '+Auth.getToken()}
      }).success(function(data){
        service.servicesList = data;
        service.getGraphArr(2015);
      })
    };
    service.addNewservice = function(newService){
      return $http.post("api/services",newService,{
        headers: {'Authorization': 'Bearer '+Auth.getToken()}
      }).success(function(data){
        service.getAllServices(newService.propertyId)
      })
    }
    service.getGraphArr = function(year){
      service.graphArr = [[],[],[],[]];
      service.graphArr.forEach(function(v){
        for(var i=0;i<12;i++){
          v.push(0);
        }
      });
      service.servicesList.forEach(function(v){
        v.date = new Date(v.date)
        if(v.date.getFullYear() == year){
          if(v.title == "Plant trimming"){
            console.log(v.title)
            service.graphArr[0][v.date.getMonth()] ++;
          }else if(v.title == "Leaf and garbage pickup"){
            console.log(v.title)
            service.graphArr[1][v.date.getMonth()] ++;
          }else if(v.title == "Dead plant replacement"){
            console.log(v.title)
            service.graphArr[2][v.date.getMonth()] ++;
          }else if(v.title == "Weed spraying"){
            console.log(v.title)
            service.graphArr[3][v.date.getMonth()] ++;
          }
        }
        
      })
    }
    return service
    
  });
