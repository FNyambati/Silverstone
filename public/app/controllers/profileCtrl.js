angular.module('myApp').controller('profileCtrl', function($scope, profileService, user) {
  $scope.user = user;
  $scope.getProfileInfo = function () {
      profileService.getProfileInfo().then(function (res) {
          console.log(res);
          $scope.profiles = res;
      });
  };

  $scope.addProfileInfo = function (profile) {
      profileService.addProfileInfo($scope.profile).then(function (res) {
          console.log(res);
          $scope.getProfileInfo();
      });
  };

  $scope.editProfileInfo = function (user, profile) {
      console.log(user, profile);
      profileService.editProfile(profile).then(function (res) {
          console.log(res);
          $scope.getProfileInfo();
      });
  };
  $scope.getProfileInfo();






  $(document).ready(function() {
      $('#accountPhone')
                  .intlTelInput({
                  utilsScript: '/libraries/utils.js',
                  autoPlaceholder: true,
                  preferredCountries: ['us', 'gb', 'ke']
              });
  });
});
