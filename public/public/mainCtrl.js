angular.module("geoQzr").controller("mainCtrl", function($scope, mainServ) {


$scope.states = [{
      name: 'Arizona',
      questions: {
          capital: 'Phoenix',
          landmarks: 'This state is home to the Grand Canyon'
      },
      id: 1,
      region: 'w'
  }, {
      name: 'Delaware',
      questions: {
          capital: 'Dover',
          landmarks: 'State motto is Liberty and Independence'
      },
      id: 2,
      region: 'ne'
  },
  {
      name: 'Iowa',
      questions: {
          capital: 'Des Moines',
          landmarks: 'This state is known as The Hawkeye State'
      },
      id: 3,
      region: 'mw'
  },
  {
      name: 'Ohio',
      questions: {
          capital: 'Columbus',
          landmarks: 'Columbus Zoo and Aquarium'
      },
      id: 4,
      region: 'mw'
  },
  {
      name: 'Kansas',
      questions: {
          capital: 'Topeka',
          landmarks: 'This state is home to the Museum of World Treasures'
      },
      id: 5,
      region: 'mw'
  },
  {
      name: 'California',
      questions: {
          capital: 'Sacremento',
          landmarks: 'This state is home to Disneyland'
      },
      id: 6,
      region: 'w'
  },
  {
      name: 'Washington',
      questions: {
          capital: 'Olympia',
          landmarks: 'Home to the Space Needle'
      },
      id: 7,
      region: 'w'
  },{
      name: 'Montana',
      questions: {
          capital: 'Helena',
          landmarks: 'This state is home to Yellostone National Park'
      },
      id: 8,
      region: 'w'
  } ,{
      name: 'Colorado',
      questions: {
          capital: 'Denver',
          landmarks: 'Home to Rocky Mountain National Park'
      },
      id: 9,
      region: 'w'
  } ,{
      name: 'Utah',
      questions: {
          capital: 'Salt Lake City',
          landmarks: 'Bryce Canyon National Park'
      },
      id: 10,
      region: 'w'
  } ,{
      name: 'New Jersey',
      questions: {
          capital: 'Trenton',
          landmarks: 'Jersey Shore'
      },
      id: 11,
      region: 'ne'
  } ,{
      name: 'New York',
      questions: {
          capital: 'Albany',
          landmarks: 'Statue of Liberty'
      },
      id: 12,
      region: 'ne'
  } ,{
      name: 'New Hampshire',
      questions: {
          capital: 'Concord',
          landmarks: 'Flume Gorge'
      },
      id: 13,
      region: 'ne'
  } ,{
      name: 'Connecticut',
      questions: {
          capital: 'Hartford',
          landmarks: 'Home of the Mark Twain House and Museum'
      },
      id: 14,
      region: 'ne'
  } ,{
      name: 'North Dakota',
      questions: {
          capital: 'Bismark',
          landmarks: 'Fort Mandan'
      },
      id: 15,
      region: 'mw'
  } ,{
      name: 'South Dakota',
      questions: {
          capital: 'Pierre',
          landmarks: 'Mount Rushmore National Memorial'
      },
      id: 16,
      region: 'mw'
  } ,{
      name: 'Indiana',
      questions: {
          capital: 'Indianapolis',
          landmarks: 'This state is home to The Indianapolis 500'
      },
      id: 17,
      region: 'mw'
  } ,{
      name: 'Illinois',
      questions: {
          capital: 'Springfield',
          landmarks: 'This state is home to the Wrigley Field'
      },
      id: 18,
      region: 'mw'
  } ,{
      name: 'Missouri',
      questions: {
          capital: 'Jefferson City',
          landmarks: 'This state is home to the Gateway Arch'
      },
      id: 19,
      region: 'mw'
  } ,{
      name: 'Louisianna',
      questions: {
          capital: 'Baton Rouge',
          landmarks: 'This state is home to the French Quarter'
      },
      id: 20,
      region: 'se'
  } ,{
      name: 'Oregon',
      questions: {
          capital: 'Salem',
          landmarks: 'Crater Lake National Park'
      },
      id: 21,
      region: 'w'
  } ,{
      name: 'Idaho',
      questions: {
          capital: 'Boise',
          landmarks: 'This state is home to the Frank Church Wilderness'
      },
      id: 22,
      region: 'w'
  } ,{
      name: 'New Mexico',
      questions: {
          capital: 'Sante Fe',
          landmarks: 'Carlsbad'
      },
      id: 23,
      region: 'w'
  } ,{
      name: 'Texas',
      questions: {
          capital: 'Austin',
          landmarks: 'Alamo'
      },
      id: 24,
      region: 'w'
  } ,{
      name: 'Alabama',
      questions: {
          capital: 'Helena',
          landmarks: 'Home to the World War II Battleship, USS Alabama'
      },
      id: 25,
      region: 'se'
  } ,{
      name: 'Georgia',
      questions: {
          capital: 'Atlanta',
          landmarks: 'Home of Centennial Olympic Park'
      },
      id: 26,
      region: 'se'
  } ,{
      name: 'Virginia',
      questions: {
          capital: 'Richmond',
          landmarks: 'Home to Busch Gardens'
      },
      id: 27,
      region: 'se'
  } ,{
      name: 'North Carolina',
      questions: {
          capital: 'Raleigh',
          landmarks: 'Great Smokey Mountains National Park'
      },
      id: 28,
      region: 'se'
  } ,{
      name: 'South Carolina',
      questions: {
          capital: 'Columbia',
          landmarks: 'Huntington Beach State Park'
      },
      id: 29,
      region: 'se'
  } ,{
      name: 'Tennessee',
      questions: {
          capital: 'Nashville',
          landmarks: 'Dollywood'
      },
      id: 30,
      region: 'se'
  } ,{
      name: 'Kentucky',
      questions: {
          capital: 'Frankfort',
          landmarks: 'This state is home to the Kentucky Derby'
      },
      id: 31,
      region: 'se'
  } ,{
      name: 'Arkansas',
      questions: {
          capital: 'Little Rock',
          landmarks: 'Home of Hotsprings National Park'
      },
      id: 32,
      region: 'se'
  } ,{
      name: 'Mississippi',
      questions: {
          capital: 'Jackson',
          landmarks: 'This state is know as the birthplace of Elvis'
      },
      id: 33,
      region: 'se'
  } ,{
      name: 'Oklahoma',
      questions: {
          capital: 'Oklahoma City',
          landmarks: 'National Cowboy and Western Heritage Museum'
      },
      id: 34,
      region: 'w'
  } ,{
      name: 'Nebraska',
      questions: {
          capital: 'Lincoln',
          landmarks: 'Agate Fossil Beds National Monument'
      },
      id: 35,
      region: 'mw'
  } ,{
      name: 'Wisconsin',
      questions: {
          capital: 'Madison',
          landmarks: 'Wisconsin Dells'
      },
      id: 36,
      region: 'mw'
  } ,{
      name: 'Minnesota',
      questions: {
          capital: 'St. Paul',
          landmarks: 'This state is home to the Mall of America'
      },
      id: 37,
      region: 'mw'
  } ,{
      name: 'Maine',
      questions: {
          capital: 'Augusta',
          landmarks: 'This state is home to Acadia National Park'
      },
      id: 38,
      region: 'ne'
  } ,{
      name: 'Pennsylvania',
      questions: {
          capital: 'Harrisburg',
          landmarks: 'National Civil War Museum'
      },
      id: 39,
      region: 'ne'
  } ,{
      name: 'West Virginia',
      questions: {
          capital: 'Charleston',
          landmarks: 'Harpers Ferry National Historical Park'
      },
      id: 40,
      region: 'se'
  } ,{
      name: 'Maryland',
      questions: {
          capital: 'Annapolis',
          landmarks: 'This state is home to the National Aquarium'
      },
      id: 41,
      region: 'ne'
  } ,{
      name: 'Massachusetts',
      questions: {
          capital: 'Boston',
          landmarks: 'This state is home to Fenway Park'
      },
      id: 42,
      region: 'ne'
  } ,{
      name: 'Vermont',
      questions: {
          capital: 'Montpelier',
          landmarks: 'The Lincoln Family Home'
      },
      id: 43,
      region: 'ne'
  } ,{
      name: 'Rhode Island',
      questions: {
          capital: 'Providence',
          landmarks: 'Block Island Lighthouse'
      },
      id: 44,
      region: 'ne'
  } ,{
      name: 'Michigan',
      questions: {
          capital: 'Lansing',
          landmarks: 'This state is home to The Great Lakes'
      },
      id: 45,
      region: 'mw'
  } ,{
      name: 'Nevada',
      questions: {
          capital: 'Carson City',
          landmarks: 'Las Vegas'
      },
      id: 46,
      region: 'w'
  } ,{
      name: 'Wyoming',
      questions: {
          capital: 'Cheyenne',
          landmarks: 'Home to Yellowstone National Park'
      },
      id: 47,
      region: 'w'
  } ,{
      name: 'Florida',
      questions: {
          capital: 'Tallahassee',
          landmarks: 'This state is home to the Everglades and Disneyworld'
      },
      id: 48,
      region: 'se'
  },{
      name: 'Hawaii',
      questions: {
          capital: 'Honolulu',
          landmarks: 'This state is home to Pearl Harbor'
      },
      id: 49,
      region: 'out'
  },{
      name: 'Alaska',
      questions: {
          capital: 'Juneau',
          landmarks: 'This state is home to Denali National Park'
      },
      id: 50,
      region: 'out'
  }
  ];

$scope.question =
  function (){
      var state = "";
      var correctAnswers = [];
      var northeast = "",
      score = 0;
      function setState(){
        state = $scope.states[Math.floor(Math.random()*50)];
        stateName = state.name;
        function zoom (){
          if (state.region == 'ne'){
            $('#akWrapper').hide();
            $('#hiWrapper').hide();
            $('.mainSvg').animate({
              'width': '186%',
              'height': 'auto',
              'position': 'relative',
              'margin-left': '-480px',
              'margin-top': '-60px'
            }, 300);
          } else {
            $('.mainSvg').animate({
              'width': '100%',
              'height': 'auto',
              'position': 'relative',
              'margin-left': '0px',
              'margin-top': '4px'
            }, 300);
            $('#akWrapper').show();
            $('#hiWrapper').show();
          };
        };
          for(var i = 0; i < correctAnswers.length; i++){
            if(state != correctAnswers[i]){
              $('.questionBox').html("Click on the state of " + stateName);
              $('.points').html('Score: ' + score);
              northeast = "true";
          } else {
          if(correctAnswers.length < 50){
            setState();
          } else {
            $('.seconds').hide();
            $('.gameOverMsg').show();
            $('.gameOverMsg').html('Nice work, you got all 50 states!');
            $('#replay').show();
            $('.questionBox').hide();
            $('.answerWrapper').hide();
          }
          };
        };
        if (northeast === "true"){
          zoom();
        };
      };
      state = $scope.states[Math.floor(Math.random()*50)];
      stateName = state.name;
      $('.questionBox').html("Click on the state of " + stateName);
      $('polygon, path').off().on('click', function(e){
        if (e.target.id == 'Michigan' && e.target.id == stateName){
          $('.answerWrapper').html('Correct!');
          $( "#Michigan" ).children().css( "fill", "#00FF00" );
          $('#canvas').show();
          $(e.currentTarget).css('fill', color);
          correctAnswers.push(state);
          score+=50;
          setState();
        } else if (e.target.id == 'Maryland' && e.target.id == stateName){
          $('.answerWrapper').html('Correct!');
          $( "#Maryland" ).children().css( "fill", "#FFB30F" );
          $('#canvas').show();
          $(e.currentTarget).css('fill', color);
          correctAnswers.push(state);
          score+=50;
          setState();
        } else if (e.target.id == stateName){
          $('.answerWrapper').html('Correct!');
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++ ) {
              color += letters[Math.floor(Math.random() * 16)];
          };
          $('#canvas').show();
          $(e.currentTarget).css('fill', color);
          correctAnswers.push(state);
          score+=50;
          setState();
        } else {
          $('#canvas').hide();
          $('.answerWrapper').html('Oops, you clicked ' + e.target.id + '</br>...try again!');
        };
      });
    };

    $scope.question2 =
      function (){
          var state = "";
          score = 1;
        //   function setState(){
        //     state = $scope.states[Math.floor(Math.random()*48)].name;
        //     $('.questionBox').html("Click on the state of " + state);
        //     $('.points').html('Score: ' + score);
        //     score++;
        //     noRepeat();
        //   };
          state = $scope.states[Math.floor(Math.random()*48)].name;
          $('.questionBox').html("Click on the state of " + state);
          $('polygon, path').off().on('click', function(e){
            if(e.target.id == state){
              $('.answerWrapper').html(e.target.id);
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++ ) {
                  color += letters[Math.floor(Math.random() * 16)];
              }
            //   $('#canvas').show();
              $(e.currentTarget).css('fill', 'white');
              setState();
            } else if (state == 'Michigan' && e.target.id == 'Michigan'){
              alert('Hi');
            } else {
              $('#canvas').hide();
              $('.answerWrapper').html(e.target.id);
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
          $('.gameOverMsg').show();
          $('.gameOverMsg').html('You ran out of time!');
          $('#replay').show();
          $('.questionBox').hide();
          $('.answerWrapper').hide();
          $('.mainSvg').animate({
            'width': '100%',
            'height': 'auto',
            'position': 'relative',
            'margin-left': '0px',
            'margin-top': '4px'
          }, 300);
          $('#akWrapper').show();
          $('#hiWrapper').show();
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
                  $('.usMainWrapper').delay(200).fadeIn();
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


        $scope.playGame2 =
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
                          $('.usMainWrapper').delay(200).fadeIn();
                          $('.seconds').show();
                          $('.time').hide();
                          $('#replay').hide();
                          $('.questionBox').show();
                          $('.answerWrapper').show();
                        //   $scope.countdown();
                          $scope.question2();
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
    $('.usMainWrapper').delay(200).hide();
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
                  $('.usMainWrapper').delay(200).fadeIn();
                  $('.seconds').show();
                  $('.time').hide();
                  $('#replay').hide();
                  $('.questionBox').show();
                  $('.answerWrapper').show();
                  $scope.countdown();
                  $('.points').html('Score: ' + 0);
                  $('.answerWrapper').html('');
                  $('polygon, path').css('fill', '#F1EEE5');
                  $scope.question();
                }
              )})
            }
          )})
        })
      });
    };

//
$scope.addPlayer = function(playerObj){
  mainServ.addPlayer(playerObj)
  .then(function(response){
    // $scope.playerObj.name = "";//clears input
    $scope.getPlayers();
  });
};

$scope.changePlayer = function(playerObj){
  mainServ.changePlayer(playerObj)
  .then(function(response){
    $scope.getPlayers();
  });
};

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

$scope.$on('$stateChangeSuccess', function(){
   $scope.getPlayers();
});


$scope.changePlayer = function(playerObj){
  console.log(playerObj)
  mainServ.changePlayer(playerObj)
  .then(function(response){
    console.log(response);
    $scope.getPlayers();
  });
};


  });
