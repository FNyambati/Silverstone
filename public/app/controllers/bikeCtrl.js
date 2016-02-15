angular.module('myApp').controller('bikeCtrl', function($scope, bikeService) {

  $scope.test = "FREDDDDEG ENGJKWNGKW";
  $scope.getBikes = function() {
    bikeService.getBikes().then(function(res) {
      console.log(res);
      $scope.bikes = res;
    });
  };

  $scope.addBike = function() {
    bikeService.addBike($scope.newBike, $scope.newDifficulty, $scope.newCc, $scope.newDescription, $scope.newTopSpeed, $scope.newSixty, $scope.newImg).then(function(res) {
      console.log(res);
      $scope.getBikes();
    });
  };

  $scope.editBike = function(bike, difficulty, cc, description, topSpeed, sixty, img) {
    console.log(bike, difficulty, cc, description, topSpeed, sixty, img);
    bikeService.editBike(bike, difficulty, cc, description, topSpeed, sixty, img).then(function(res) {
      console.log(res);
      $scope.getBikes();
    });
  };

  $scope.deleteBike = function(id) {
    console.log(id);
    bikeService.deleteBike(id).then(function(res) {
      console.log(res);
      $scope.getBikes();
    });

  };
  $scope.getBikes();
});
