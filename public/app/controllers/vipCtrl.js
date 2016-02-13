angular.module('myApp').controller('vipCtrl', function($scope, profile, profileService) {
  $scope.addVip = function(vipStatus) {
    console.log(profile.data);
    profileService.editProfileVip(profile.data._id, {
      isVIP: vipStatus
    }).then(function(response) {
      swal({
        title: 'Welcome To ' + vipStatus,
        text: "You Will Be Billed Upon Arrival To The Track",
        confirmButtonText: 'Got It!',
        confirmButtonColor: '0D2E60',
        background: '#222222',
        imageUrl: "images/myLogo.png",
        imageSize: "120x120"
      });
    });
  };
});
