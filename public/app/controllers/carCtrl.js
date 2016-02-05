angular.module('myApp').controller('carCtrl', function($scope, carService) {


  $scope.getCars = function() {
    carService.getCars().then(function(res) {
      console.log(res);
      $scope.cars = res;
    });
  };

  $scope.addCar = function() {
    carService.addCar($scope.newCar, $scope.newDifficulty, $scope.newHorsepower, $scope.newDescription, $scope.newTopSpeed, $scope.newSixty, $scope.newImg).then(function(res) {
      console.log(res);
      $scope.getCars();
    });
  };

  $scope.editCar = function(car, difficulty, horsepower, description, topSpeed, sixty, img) {
    console.log(car, difficulty, horsepower, description, topSpeed, sixty, img);
    carService.editCar(car, difficulty, horsepower, description, topSpeed, sixty, img).then(function(res) {
      console.log(res);
      $scope.getCars();
    });
  };


  $scope.deleteCar = function(id) {
    console.log(id);
    carService.deleteCar(id).then(function(res) {
      console.log(res);
      $scope.getCars();
    });

  };
  $scope.getCars();
});
