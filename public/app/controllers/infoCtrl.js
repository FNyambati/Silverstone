angular.module('myApp').controller('infoCtrl', function($scope){
  $(function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  });
});
