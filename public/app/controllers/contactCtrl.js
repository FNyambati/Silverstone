angular.module('myApp').controller('contactCtrl', function($scope){
    $scope.sendContact = function() {
      swal({
        title: "Your Enquiry has been sent!",
        text: "We'll get back to you soon!",
        confirmButtonText: 'Thanks!',
        confirmButtonColor: '0D2E60',
        background: '#222222',
        imageUrl: "http://www.circuitofwales.com/media/1328/2000px-logo_silverstone_circuitsvg.png",
        imageSize: "120x120"
      });
    };
});
