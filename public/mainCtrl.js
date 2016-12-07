angular.module("geoQzr").controller("mainCtrl", function($scope, mainServ) {

$scope.states = [{
    name: 'Arizona',
    questions: {
        capital: 'Phoenix',
        landmarks: 'This state is home to the Grand Canyon'
    },
    id: 1
}, {
    name: 'Delaware',
    questions: {
        capital: 'Dover',
        landmarks: 'State motto is Liberty and Independence'
    },
    id: 2
},
{
    name: 'Iowa',
    questions: {
        capital: 'Des Moines',
        landmarks: 'This state is known as The Hawkeye State'
    },
    id: 3
},
{
    name: 'Ohio',
    questions: {
        capital: 'Columbus',
        landmarks: 'Columbus Zoo and Aquarium'
    },
    id: 4
},
{
    name: 'Kansas',
    questions: {
        capital: 'Topeka',
        landmarks: 'This state is home to the Museum of World Treasures'
    },
    id: 5
},
{
    name: 'California',
    questions: {
        capital: 'Sacremento',
        landmarks: 'This state is home to Disneyland'
    },
    id: 6
},
{
    name: 'Washington',
    questions: {
        capital: 'Olympia',
        landmarks: 'Home to the Space Needle'
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
        capital: 'Denver',
        landmarks: 'Home to Rocky Mountain National Park'
    },
    id: 9
} ,{
    name: 'Utah',
    questions: {
        capital: 'Salt Lake City',
        landmarks: 'Bryce Canyon National Park'
    },
    id: 10
} ,{
    name: 'New Jersey',
    questions: {
        capital: 'Trenton',
        landmarks: 'Jersey Shore'
    },
    id: 11
} ,{
    name: 'New York',
    questions: {
        capital: 'Albany',
        landmarks: 'Statue of Liberty'
    },
    id: 12
} ,{
    name: 'New Hampshire',
    questions: {
        capital: 'Concord',
        landmarks: 'Flume Gorge'
    },
    id: 13
} ,{
    name: 'Connecticut',
    questions: {
        capital: 'Hartford',
        landmarks: 'Home of the Mark Twain House and Museum'
    },
    id: 14
} ,{
    name: 'North Dakota',
    questions: {
        capital: 'Bismark',
        landmarks: 'Fort Mandan'
    },
    id: 15
} ,{
    name: 'South Dakota',
    questions: {
        capital: 'Pierre',
        landmarks: 'Mount Rushmore National Memorial'
    },
    id: 16
} ,{
    name: 'Indiana',
    questions: {
        capital: 'Indianapolis',
        landmarks: 'This state is home to The Indianapolis 500'
    },
    id: 17
} ,{
    name: 'Illinois',
    questions: {
        capital: 'Springfield',
        landmarks: 'This state is home to the Wrigley Field'
    },
    id: 18
} ,{
    name: 'Missouri',
    questions: {
        capital: 'Jefferson City',
        landmarks: 'This state is home to the Gateway Arch'
    },
    id: 19
} ,{
    name: 'Louisianna',
    questions: {
        capital: 'Baton Rouge',
        landmarks: 'This state is home to the French Quarter'
    },
    id: 20
} ,{
    name: 'Oregon',
    questions: {
        capital: 'Salem',
        landmarks: 'Crater Lake National Park'
    },
    id: 21
} ,{
    name: 'Idaho',
    questions: {
        capital: 'Boise',
        landmarks: 'This state is home to the Frank Church Wilderness'
    },
    id: 22
} ,{
    name: 'New Mexico',
    questions: {
        capital: 'Sante Fe',
        landmarks: 'Carlsbad'
    },
    id: 23
} ,{
    name: 'Texas',
    questions: {
        capital: 'Austin',
        landmarks: 'Alamo'
    },
    id: 24
} ,{
    name: 'Alabama',
    questions: {
        capital: 'Helena',
        landmarks: 'Home to the World War II Battleship, USS Alabama'
    },
    id: 25
} ,{
    name: 'Georgia',
    questions: {
        capital: 'Atlanta',
        landmarks: 'Home of Centennial Olympic Park'
    },
    id: 26
} ,{
    name: 'Virginia',
    questions: {
        capital: 'Richmond',
        landmarks: 'Home to Busch Gardens'
    },
    id: 27
} ,{
    name: 'North Carolina',
    questions: {
        capital: 'Raleigh',
        landmarks: 'Great Smokey Mountains National Park'
    },
    id: 28
} ,{
    name: 'South Carolina',
    questions: {
        capital: 'Columbia',
        landmarks: 'Huntington Beach State Park'
    },
    id: 29
} ,{
    name: 'Tennessee',
    questions: {
        capital: 'Nashville',
        landmarks: 'Dollywood'
    },
    id: 30
} ,{
    name: 'Kentucky',
    questions: {
        capital: 'Frankfort',
        landmarks: 'This state is home to the Kentucky Derby'
    },
    id: 31
} ,{
    name: 'Arkansas',
    questions: {
        capital: 'Little Rock',
        landmarks: 'Home of Hotsprings National Park'
    },
    id: 32
} ,{
    name: 'Mississippi',
    questions: {
        capital: 'Jackson',
        landmarks: 'This state is know as the birthplace of Elvis'
    },
    id: 33
} ,{
    name: 'Oklahoma',
    questions: {
        capital: 'Oklahoma City',
        landmarks: 'National Cowboy and Western Heritage Museum'
    },
    id: 34
} ,{
    name: 'Nebraska',
    questions: {
        capital: 'Lincoln',
        landmarks: 'Agate Fossil Beds National Monument'
    },
    id: 35
} ,{
    name: 'Wisconsin',
    questions: {
        capital: 'Madison',
        landmarks: 'Wisconsin Dells'
    },
    id: 36
} ,{
    name: 'Minnesota',
    questions: {
        capital: 'St. Paul',
        landmarks: 'This state is home to the Mall of America'
    },
    id: 37
} ,{
    name: 'Maine',
    questions: {
        capital: 'Augusta',
        landmarks: 'This state is home to Acadia National Park'
    },
    id: 38
} ,{
    name: 'Pennsylvania',
    questions: {
        capital: 'Harrisburg',
        landmarks: 'National Civil War Museum'
    },
    id: 39
} ,{
    name: 'West Virginia',
    questions: {
        capital: 'Charleston',
        landmarks: 'Harpers Ferry National Historical Park'
    },
    id: 40
} ,{
    name: 'Maryland',
    questions: {
        capital: 'Annapolis',
        landmarks: 'This state is home to the National Aquarium'
    },
    id: 41
} ,{
    name: 'Massachusetts',
    questions: {
        capital: 'Boston',
        landmarks: 'This state is home to Fenway Park'
    },
    id: 42
} ,{
    name: 'Vermont',
    questions: {
        capital: 'Montpelier',
        landmarks: 'The Lincoln Family Home'
    },
    id: 43
} ,{
    name: 'Rhode Island',
    questions: {
        capital: 'Providence',
        landmarks: 'Block Island Lighthouse'
    },
    id: 44
} ,{
    name: 'Michigan',
    questions: {
        capital: 'Lansing',
        landmarks: 'This state is home to The Great Lakes'
    },
    id: 45
} ,{
    name: 'Nevada',
    questions: {
        capital: 'Carson City',
        landmarks: 'Las Vegas'
    },
    id: 46
} ,{
    name: 'Wyoming',
    questions: {
        capital: 'Cheyenne',
        landmarks: 'Home to Yellowstone National Park'
    },
    id: 47
} ,{
    name: 'Florida',
    questions: {
        capital: 'Tallahassee',
        landmarks: 'This state is home to the Everglades and Disneyworld'
    },
    id: 48
},{
    name: 'Hawaii',
    questions: {
        capital: 'Honolulu',
        landmarks: 'This state is home to Pearl Harbor'
    },
    id: 49
},{
    name: 'Alaska',
    questions: {
        capital: 'Juneau',
        landmarks: 'This state is home to Denali National Park'
    },
    id: 50
}
];

$scope.question =
  function (){
      var state = "";
      score = 1;
      function setState(){
        state = $scope.states[Math.floor(Math.random()*48)].name;
        $('.questionBox').html("Click on the state of " + state);
        $('.points').html('Score: ' + score);
        score++;
      };
      state = $scope.states[Math.floor(Math.random()*48)].name;
      $('.questionBox').html("Click on the state of " + state);
      $('polygon, path').off().on('click', function(e){
        if(e.target.id == state){
          $('.answerWrapper').html('Correct!');
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++ ) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          $('#canvas').show();
          $(e.currentTarget).css('fill', color);
          setState();
        } else if (state == 'Michigan' && e.target.id == 'Michigan'){
          alert('Hi');
        } else {
          $('#canvas').hide();
          $('.answerWrapper').html('Oops, you clicked ' + e.target.id + '</br>...try again!');
        };
      });
    };

$scope.countdown =
  function(){
  setTimeout(function (){
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 93);
      if(seconds === 00) {
          $('.seconds').hide();
          $('.time').show();
          $('#replay').show();
          $('.questionBox').hide();
          $('.answerWrapper').hide();
        };
      return {
        'total': t,
        'seconds': seconds
      };
    }
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var secondsSpan = clock.querySelector('.seconds');
    function updateClock() {
      var t = getTimeRemaining(endtime);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    var deadline = new Date(Date.parse(new Date()) + 90 * 1000);
      initializeClock('clockdiv', deadline);
    }, 200);
  };

$scope.playGame1 =
  function(){
    $('.instructions').fadeOut();
    $('.mainMenuBtn').fadeOut();
    $('.ready').delay(350).fadeIn(
      function(){$('.ready').delay(350).fadeOut(
        function(){
          $('.set').fadeIn(function(){$('.set').delay(350).fadeOut(
            function(){
              $('.go').fadeIn(function(){$('.go').delay(350).fadeOut(
                function(){
                  $('.ready').css("visibility", "hidden");
                  $('.set').css("visibility", "hidden");
                  $('.go').css("visibility", "hidden");
                  $('.wrapper').delay(200).fadeIn();
                  $('.usmock1').delay(200).fadeIn();
                  $('.seconds').show();
                  $('.time').hide();
                  $('#replay').hide();
                  $('.questionBox').show();
                  $('.answerWrapper').show();
                  $scope.countdown();
                  $scope.question();
                }
              )})
            }
          )})
        })
      });
    };

$scope.replayGame1 =
  function(){
    $('.ready').css("visibility", "visible");
    $('.set').css("visibility", "visible");
    $('.go').css("visibility", "visible");
    $('.wrapper').delay(200).hide();
    $('.usmock1').delay(200).hide();
    $('.ready').delay(350).fadeIn(
      function(){$('.ready').delay(350).fadeOut(
        function(){
          $('.set').fadeIn(function(){$('.set').delay(350).fadeOut(
            function(){
              $('.go').fadeIn(function(){$('.go').delay(350).fadeOut(
                function(){
                  $('.ready').css("visibility", "hidden");
                  $('.set').css("visibility", "hidden");
                  $('.go').css("visibility", "hidden");
                  $('.wrapper').delay(200).fadeIn();
                  $('.usmock1').delay(200).fadeIn();
                  $('.seconds').show();
                  $('.time').hide();
                  $('#replay').hide();
                  $('.questionBox').show();
                  $('.answerWrapper').show();
                  $scope.countdown();
                  $('.points').html('Score: ' + 0);
                  $('.answerWrapper').html('');
                  $('polygon, path').css('fill', '#fff');
                  $scope.question();
                }
              )})
            }
          )})
        })
      });
    };

//

$scope.getPlayers = function(){
  mainServ.getPlayers()
  .then(function(response){
    $scope.allPlayers = response;//all players
  });
};

$scope.addPlayer = function(playerObj){
  mainServ.addPlayer(playerObj)
  .then(function(response){
    // $scope.playerObj.name = "";//clears input
    $scope.getPlayers();
  });
};

$scope.changePlayer = function(playerObj){
  console.log(playerObj)
  mainServ.changePlayer(playerObj)
  .then(function(response){
    console.log(response);
    $scope.getPlayers();
  });
};

// $scope.deletePlayer = function(playerObj){
//   mainServ.changePlayer(playerObj)
//   .then(function(response){
//     console.log(response);
//     $scope.getPlayers();
//   });
// };

//player CRUD

$scope.$on('$stateChangeSuccess', function(){
   $scope.getPlayers();
});


$scope.getPlayer = function(id) {
    console.log(id)
    for (var i = 0; i < $scope.allPlayers.length; i++) {
        if (id == $scope.allPlayers[i]._id) {
            $scope.onePlayer = $scope.allPlayers[i];
        }
    }
};

// $scope.addPlayer = function(idString){//idString comes from cookie generator
// mainServ.addPlayer(idString)
// .then(function(response){
//   $scope.getPlayers();
// });
// };

// //GENERATE ID COOKIEe

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
