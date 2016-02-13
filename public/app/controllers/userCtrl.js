angular.module('myApp').controller('userCtrl', function($scope, userService, $state) {
  $scope.registerUser = function() {
    userService.registerUser($scope.user).then(function(res) {
      swal({
        title: " Succesfully Registered User!",
        text: "Redirecting You To Login Page",
        confirmButtonText: 'Log In',
        confirmButtonColor: '0D2E60',
        background: '#222222',
        imageUrl: "images/myLogo.png",
        imageSize: "120x120"
      });
      console.log(res);
      $('#signupbox').hide(); $('#loginbox').show();
    });
  };
  $scope.login = function(user) {
    userService.login($scope.user).then(function(res){
      if(res.status === 401){
        swal({
          title: "Email or Password Incorrect",
          text: "Please try Again",
          confirmButtonText: 'GO',
          confirmButtonColor: '0D2E60',
          background: '#222222',
          imageUrl: "images/myLogo.png",
          imageSize: "120x120"
        });
      }
      swal({
        title: " Succesfully Logged In!",
        text: "Redirecting You To Your Profile",
        confirmButtonText: 'GO',
        confirmButtonColor: '0D2E60',
        background: '#222222',
        imageUrl: "images/myLogo.png",
        imageSize: "120x120"
      });
      $state.go('profile');
    });
  };
  // $scope.logout = function(user) {
  //   userService.logout($scope.user).then(function(res){
  //     swal({
  //       title: " Succesfully Logged Out!",
  //       text: "Thanks For Visiting",
  //       confirmButtonText: 'Goodbye!',
  //       confirmButtonColor: '0D2E60',
  //       background: '#222222',
  //       imageUrl: "images/myLogo.png",
  //       imageSize: "120x120"
  //     });
  //     $state.go('home');
  //
  //   });
  // };
});
