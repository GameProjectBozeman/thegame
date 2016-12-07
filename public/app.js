angular.module("geoQzr",["ui.router"]).config(function($stateProvider, $urlRouterProvider ){
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "home.html",
    })
    .state("games", {
      url: "/games",
      templateUrl: "games.html"
    })
    .state("players", {
      url: "/players",
      templateUrl: "players.html"
    })
    .state("createPlayer", {
      url: "/createPlayer",
      templateUrl: "createPlayer.html"
    })
    .state("createAvatar", {
      url: "/createAvatar",
      templateUrl: "createAvatar.html"
    })
    .state("game1", {
      url: "/game1",
      templateUrl: "game1.html"
    })
    .state("game2", {
      url: "/game2",
      templateUrl: "game2.html"
    })
    .state("game3", {
      url: "/game3",
      templateUrl: "game3.html"
    })
    .state("game4", {
      url: "/game4",
      templateUrl: "game4.html"
    })
    .state("learn", {
      url: "/learn",
      templateUrl: "learn.html"
    })
    ;

  $urlRouterProvider.otherwise("/home");

})
