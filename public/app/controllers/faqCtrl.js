angular.module('myApp').controller('faqCtrl', function($scope) {
  $(function() {
    $("#accordion").accordion({
      collapsible: true
    });
  });
});
