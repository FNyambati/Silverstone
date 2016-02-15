angular.module('myApp').service('laptimeService', function($http) {

  this.getLaptimes = function() {

    return $http({
      method: 'GET',
      url: '/laptime'
    }).then(function(res) {

      console.log(res.data);
      return res;

    });
  };

  this.addLaptime = function(name, car, time) {
    return $http({

      method: 'POST',
      url: '/laptime',
      data: {
        name: name,
        car: car,
        time: time
      }
    }).then(function(res) {
      console.log(res);
      return res;
    });
  };

  this.editLaptime = function(name, car, time) {
    return $http({
      method: 'PUT',
      url: '/laptime/' + id,
      data: {
        name: name,
        car: car,
        time: time
      },
    }).then(function(res) {
      console.log(res);
      return res;
    });
  };
  this.deleteLaptime = function(id) {
    return $http({
      method: 'DELETE',
      url: '/laptime/' + id
    }).then(function(res) {
      return res;

    });
  };

});
