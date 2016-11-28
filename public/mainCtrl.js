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
        landmarks: 'Fenwick Island State Park is in this state'
    },
    id: 2
}, {
    name: 'Montana',
    questions: {
        capital: 'Helena',
        landmarks: 'This state is home to Yellostone National Park'
    },
    id: 3
}];

$scope.question =
  function(){
      console.log('testtesttest');
    var state = $scope.states[Math.floor(Math.random()*3)].name;
      $('.questionBox').html("Click on the state of " + state);
      $('.usmock1').click(function(e){
        if(e.target.id == state){
          alert('Correct!');
        } else {
          alert('Oops...try again.');
        };
      })
    };

});
