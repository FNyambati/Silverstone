angular.module('myApp').service('carService', function($http) {

  this.getCars = function() {

    return $http({
      method: 'GET',
      url: '/car'
    }).then(function(res) {

      console.log(res.data);
      return res.data;

    });
  };
  this.addCar = function(car, difficulty, horsepower, description, topSpeed, sixty, img) {
    return $http({

      method: 'POST',
      url: '/car',
      data: {
        car: car,
        difficulty: difficulty,
        horsepower: horsepower,
        description: description,
        topSpeed: topSpeed,
        sixty: sixty,
        img: img
      }
    }).then(function(res) {
      console.log(res);
      return res;
    });
  };

  this.editCar = function(car, difficulty, horsepower, description, topSpeed, sixty, img) {
    return $http({
      method: 'PUT',
      url: '/car/' + id,
      data: {
        car: car,
        difficulty: difficulty,
        horsepower: horsepower,
        description: description,
        topSpeed: topSpeed,
        sixty: sixty,
        img: img
      },
    }).then(function(res) {
      console.log(res);
      return res;
    });
  };
  this.deleteCar = function(id) {
    return $http({
      method: 'DELETE',
      url: '/car/' + id
    }).then(function(res) {
      return res;

    });
  };

});
