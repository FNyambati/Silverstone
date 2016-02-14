angular.module('myApp').controller('profileCtrl', function($scope, $state, profileService, userService, user) {

  $scope.user = user;
  console.log(user + 'console logged user before profile info');
  $scope.getProfileInfo = function() {
    profileService.getProfileInfo().then(function(res) {
      console.log(res);
      // console.log(user);
      $scope.profile = res.data;
      $scope.editProfile = {
        first: res.data.first,
        last: res.data.last,
        address1: res.data.address1,
        address2: res.data.address2,
        phone: res.data.phone,
        city: res.data.city,
        state: res.data.state,
        zip: res.data.zip,
        country: res.data.country,
        userCar: res.data.userCar,
        laptime: res.data.laptime,
        isVIP: res.data.isVIP
      };

    });
  };

  $scope.addProfileInfo = function(profile) {
    profileService.addProfileInfo($scope.profile).then(function(res) {
      console.log(res);
      $scope.getProfileInfo();
    });
  };

  $scope.editProfileInfo = function(user, profile) {
    console.log('controller', user, profile);
    profile._id = $scope.profile._id;
    profileService.editProfile(user, profile).then(function(res) {
      console.log(res);
      swal({
        title: "Changes Saved!",
        text: "Your Profile Will Now Update",
        confirmButtonText: 'Got It!',
        confirmButtonColor: '0D2E60',
        background: '#222222',
        imageUrl: "http://www.circuitofwales.com/media/1328/2000px-logo_silverstone_circuitsvg.png",
        imageSize: "120x120"
      });
      $scope.getProfileInfo();
    });
  };
  $scope.getProfileInfo();

  // $scope.logout= userService.logout;
  $scope.logout = function(user) {
    userService.logout($scope.user).then(function(res){
      swal({
        title: " Succesfully Logged Out!",
        text: "Thanks For Visiting",
        confirmButtonText: 'Goodbye!',
        confirmButtonColor: '0D2E60',
        background: '#222222',
        imageUrl: "images/myLogo.png",
        imageSize: "120x120"
      });
      $state.go('home');

    });
  };




  $(document).ready(function() {
    $('#accountPhone')
      .intlTelInput({
        utilsScript: '/libraries/utils.js',
        autoPlaceholder: true,
        preferredCountries: ['us', 'gb', 'ke']
      });

  });
});
