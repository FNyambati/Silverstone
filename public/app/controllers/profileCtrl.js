angular.module('myApp').controller('profileCtrl', function($scope, user) {
  $scope.user = user;
  console.log($scope);
  $(document).ready(function() {
      $('#accountPhone')
                  .intlTelInput({
                  utilsScript: '/libraries/utils.js',
                  autoPlaceholder: true,
                  preferredCountries: ['us', 'gb', 'ke']
              });
  });
});
