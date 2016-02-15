angular.module('myApp').controller('eventCtrl', function($scope, eventService) {

  $scope.getEvents = function() {
    eventService.getEvents()
      .then(function(res) {
        console.log(res);
        var events = res;
        $scope.events = res;
        $("#calendar").fullCalendar('removeEvents');
        $("#calendar").fullCalendar('addEventSource', events);
        $("#calendar").fullCalendar('rerenderEvents');
      });
  };
  $scope.getEvents();
});
