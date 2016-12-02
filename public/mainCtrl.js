angular.module("geoQzr").controller("mainCtrl", function($scope, mainServ) {

$scope.states = [{
    name: 'Arizona',
    questions: {
        capital: 'Phoenix',
        landmarks: 'This state is home to the Grand Canyon'
    },
    id: 1
}, {
    name: 'Deleware',
    questions: {
        capital: 'Dover',
        landmarks: 'Fenwick Island State Park is in this state'
    },
    id: 2
},
{
    name: 'Iowa',
    questions: {
        capital: 'Dover',
        landmarks: 'Fenwick Island State Park is in this state'
    },
    id: 3
},
{
    name: 'Ohio',
    questions: {
        capital: 'Dover',
        landmarks: 'Fenwick Island State Park is in this state'
    },
    id: 4
},
{
    name: 'Kansas',
    questions: {
        capital: 'Dover',
        landmarks: 'Fenwick Island State Park is in this state'
    },
    id: 5
},
{
    name: 'California',
    questions: {
        capital: 'Dover',
        landmarks: 'Fenwick Island State Park is in this state'
    },
    id: 6
},
{
    name: 'Washington',
    questions: {
        capital: 'Dover',
        landmarks: 'Fenwick Island State Park is in this state'
    },
    id: 7
},{
    name: 'Montana',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 8
} ,{
    name: 'Colorado',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 9
} ,{
    name: 'Utah',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 10
} ,{
    name: 'New Jersey',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 11
} ,{
    name: 'New York',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 12
} ,{
    name: 'New Hampshire',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 13
} ,{
    name: 'Connecticut',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 14
} ,{
    name: 'North Dakota',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 15
} ,{
    name: 'South Dakota',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 16
} ,{
    name: 'Indiana',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 17
} ,{
    name: 'Illinois',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 18
} ,{
    name: 'Missouri',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 19
} ,{
    name: 'Louisianna',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 20
} ,{
    name: 'Oregon',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 21
} ,{
    name: 'Idaho',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 22
} ,{
    name: 'New Mexico',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 23
} ,{
    name: 'Texas',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 24
} ,{
    name: 'Alabama',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 25
} ,{
    name: 'Georgia',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 26
} ,{
    name: 'Virginia',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 27
} ,{
    name: 'North Carolina',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 28
} ,{
    name: 'South Carolina',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 29
} ,{
    name: 'Tennessee',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 30
} ,{
    name: 'Kentucky',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 31
} ,{
    name: 'Arkansas',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 32
} ,{
    name: 'Mississippi',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 33
} ,{
    name: 'Oklahoma',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 34
} ,{
    name: 'Nebraska',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 35
} ,{
    name: 'Wisconsin',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 36
} ,{
    name: 'Minnesota',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 37
} ,{
    name: 'Maine',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 38
} ,{
    name: 'Pennsylvania',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 39
} ,{
    name: 'West Virginia',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 40
} ,{
    name: 'Maryland',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 41
} ,{
    name: 'Massachusetts',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 42
} ,{
    name: 'Vermont',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 43
} ,{
    name: 'Rhode Island',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 44
} ,{
    name: 'Michigan',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 45
} ,{
    name: 'Nevada',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 46
} ,{
    name: 'Wyoming',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 47
} ,{
    name: 'Florida',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 48
}
];
// var explode = document.getElementById('explosion');
//stop game after 60 seconds
//add AK & HI
$scope.question =
  function(){
      var state = "";
      score = 0;
      function setState(){
        state = $scope.states[Math.floor(Math.random()*48)].name;
        $('.questionBox').html("Click on the state of " + state);
        $('.points').html('Score: ' + score);
        score++;
      };
      state = $scope.states[Math.floor(Math.random()*48)].name;
      $('.questionBox').html("Click on the state of " + state);
      $('polygon, path').off().on('click', function(e){
        $(e.currentTarget).on('click', function(){
            document.getElementsByClassName('explosion');
        });
        // $(e.currentTarget).on('click', function() {
        //     return explosion;
        // });
        console.log(e.target.id);
        if(e.target.id == state){
          console.log('Correct!');
          setState();
        } else {
          console.log('Oops...try again.');
        };
      });
    };

//player CRUD

$scope.getPlayers = function(){
  mainServ.getPlayers()
  .then(function(response){
    $scope.allPlayers = response;//all players
    // $scope.allPlayers.map(function(key){//to display for hall of fame like feature
    //   return document.getElementById('highscore').insertAdjacentHTML("beforeend", "<div class='box'>" + key.html);
    //})
  });
};


$scope.addPlayer = function(idString){//idString comes from cookie generator
mainServ.addPlayer(idString)
.then(function(response){
  $scope.getPlayers();
});
};








// //GENERATE ID COOKIE
// function guid() {
//   function s4() {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .slice(1);
//   }
//   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//     s4() + '-' + s4() + s4() + s4();
// }

//idString = return... (only return 8 characters)

//     $scope.playerGenerator =
//     function(){
//       return {
//       // get player name input(case sensitive) +
//       // get ip from API +
//       // get idString
//       //nest cookie here or nest function in player=""?
//       // if username exists on device - ask for new username
//       // if username exists on ip - append new ID
//       //}
//     }
//
// //player cookie
// document.cookie = "player=(insert ID generator function here)"; expires= Wed, 01 Jan 2020 00:00:00 GMT;
// // path will default to where you are
//
//
// //show cookies
// document.getElementById("player1").textContent =  document.cookie;
//

});
