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
}];

$scope.question =
  function(){
      var state = $scope.states[Math.floor(Math.random()*8)].name;
      $('.questionBox').html("Click on the state of " + state);
      $('polygon').off.on('click', function(e){
        console.log(e.target.id);
        if(e.target.id == state){
          alert('Correct!');
        } else {
          alert('Oops...try again.');
        };
      })
    };
});
