angular.module('myApp').controller('userCtrl', function($scope, userService, $state) {
  $scope.registerUser = function() {
    userService.registerUser($scope.user).then(function(res) {
      console.log(res);
      $('#signupbox').hide(); $('#loginbox').show();
    });
  };
  $scope.login = function(user) {
    userService.login($scope.user).then(function(res){
      if(res.status!== 200){
        alert('email or password incorrect');
      }
      $state.go('profile');
    });
  };
});
