angular.module("myApp").service("userService", function($http) {
  this.registerUser = function(user) {
    return $http({
      method: 'POST',
      url: '/users',
      data: user
    }).then(function(response) {
      return response.data;
    });
  };

  this.login = function(user) {
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function(response) {
      return response;
    });
  };

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout'
    }).then(function(response) {
      return response.data;
    });
  };

  this.getCurrentUser = function() {
    return $http({
      method: 'GET',
      url: '/me'
    }).then(function(response) {
      return response;
    });
  };

  this.updateUser = function(id, user) {
    return $http({
      method: 'PUT',
      url: '/user/' + id,
      data: user
    }).then(function(response) {
      return response.data;
    });
  };
});
