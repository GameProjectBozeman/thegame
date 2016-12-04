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
  this.addPlayer = function(playerObj){
    return $http({
      method: "POST",
      url: "/players",
      data: playerObj
    }).then(function(response){
      return response;
    });
  };
  this.changePlayer = function(playerObj){
    return $http({
      method: "PUT",
      url: "/players/" + playerObj.id,
      data: playerObj
    }).then(function(response){
      return response;
    });
  };

   });
