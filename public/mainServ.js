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
    console.log(playerObj)
    return $http({
      method: "PUT",
      url: "/players/" + playerObj._id,
      data: playerObj
    }).then(function(response){
      return response;
    });
  };

var storedPlayer;

 function set(player){
   storedPlayer = player;
 };
 function get(player){
   return storedPlayer;
 };


  // this.deletePlayer = function(playerObj){
  //   return $http({
  //     method: "DELETE",
  //     url: "/players/" + playerObj._id
  //   }).then(function(response){
  //     return response;
  //   });
  // };
   });
