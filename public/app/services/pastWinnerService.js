angular.module('myApp').service('winnerService', function($http) {

  this.getWinners = function() {

    return $http({
      method: 'GET',
      url: '/winner'
    }).then(function(res) {
      return res.data;

    });
  };

  this.addWinner = function(year, driver, team, img) {
    return $http({

      method: 'POST',
      url: '/winner',
      data: {
        year: year,
        driver: driver,
        team: team,
        img: img
      }
    }).then(function(res) {
      console.log(res);
      return res;
    });
  };

  this.editWinner = function(year, driver, team, img) {
    return $http({
      method: 'PUT',
      url: '/winner/' + id,
      data: {
        year: year,
        driver: driver,
        team: team,
        img: img
      },
    }).then(function(res) {
      console.log(res);
      return res;
    });
  };
  this.deleteWinner = function(id) {
    return $http({
      method: 'DELETE',
      url: '/winner/' + id
    }).then(function(res) {
      return res;

    });
  };

});
