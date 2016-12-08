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

//stop game after 60 seconds
//add AK & HI

$scope.question =
  function(){
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
        console.log(e.target.id);
        $(e.currentTarget).css({
          'transform': 'scale(1.3)'});
        if(e.target.id == state){
          console.log('Correct!');
          setState();
        } else {
          console.log('Oops...try again.');
        };
      });
    };
});
