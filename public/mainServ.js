angular.module("geoQzr").service("mainServ", function($http){
  //
  //player CRUD

  this.getPlayers = function(){
    return $http({
      method: "GET",
      url: "/players"
    }).then(function(response){
      return response.data;
    });
  };
  this.addPlayer = function(page){
    return $http({
      method: "POST",
      url: "/players",
      data: page
    }).then(function(response){
      return response;
    });
  };

  });
