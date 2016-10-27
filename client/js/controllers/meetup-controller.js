

// myApp.controller('meetupController', ['$scope', function($scope) {
//   $scope.meetupCount = 10;
// }]);


myApp.controller('MeetupController', ['$scope','$resource', function($scope,$resource) {
  //$scope.meetupCount = 10;

 $scope.meetups=[
	
  ];


  var Meetup = $resource('/api/meetups');


  Meetup.query(function(results){
    $scope.meetups = results;

  });
 



  $scope.createMeetup = function(){
  	// $scope.meetups.push({name:$scope.meetup});
  	// $scope.meetup = '';

  	var meetup = new Meetup();

  	meetup.name = $scope.meetupName;

  	meetup.$save(function(result){
  		 $scope.meetups.push(result);
  		 $scope.meetupName = '';
  	});
  }

}]);