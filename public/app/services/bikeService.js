angular.module('myApp').service('bikeService', function($http) {

  this.getBikes = function() {

    return $http({
      method: 'GET',
      url: '/bike'
    }).then(function(res) {

      console.log(res.data);
      return res.data;

    });
  };

  this.addBike = function(bike, difficulty, cc, description, topSpeed, sixty, img) {
    return $http({

      method: 'POST',
      url: '/bike',
      data: {
        bike: bike,
        difficulty: difficulty,
        cc: cc,
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

  this.editBike = function(bike, difficulty, cc, description, topSpeed, sixty, img) {
    return $http({
      method: 'PUT',
      url: '/bike/' + id,
      data: {
        bike: bike,
        difficulty: difficulty,
        cc: cc,
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
  this.deleteBike = function(id) {
    return $http({
      method: 'DELETE',
      url: '/bike/' + id
    }).then(function(res) {
      return res;

    });
  };

});
