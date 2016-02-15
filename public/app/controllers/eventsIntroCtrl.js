angular.module('myApp').controller('eventsIntroCtrl', function($scope, eventService, carService, bikeService, userService, user) {

  $scope.userObj = user;
  console.log('userObj', $scope.userObj);
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

  $scope.getUserEvent = function(userId) {
    eventService.getUserEvent(userId)
      .then(function(res) {
        console.log(res);
        var events = res;
        $scope.events = res;
        // console.log(events);
        $("#calendar").fullCalendar('removeEvents');
        $("#calendar").fullCalendar('addEventSource', events);
        $("#calendar").fullCalendar('rerenderEvents');
      });
  };
  $scope.pendingEvents = function() {
    eventService.pendingEvents()
      .then(function(res) {

      });
  };
  $scope.addEvent = function(newEvent) {
    var event = newEvent;
    $scope.newEvent = null;
    var host = $scope.userObj;
    console.log('event set at ' + event.start);
    eventService.addEvent(event, host)
      .then(function(res) {
        console.log(res);
        swal({
          title: "Your Event Has Been Booked!!!!",
          text: "See You on" + ' ' + event.start + '!!!',
          confirmButtonText: 'THANKS!',
          confirmButtonColor: '0D2E60',
          background: '#222222',
          imageUrl: "http://www.circuitofwales.com/media/1328/2000px-logo_silverstone_circuitsvg.png",
          imageSize: "120x120"
        });
        $scope.getEvents();

      });
  };
  $scope.deleteEvent = function(id) {
    console.log(id);
    eventService.deleteEvent(id).then(function(res) {
      console.log(res);
      $scope.getEvents();
    });

  };
  $scope.getCars = function() {
    carService.getCars().then(function(res) {
      console.log(res);
      $scope.cars = res;
    });
  };
  $scope.getBikes = function() {
    bikeService.getBikes().then(function(res) {
      console.log(res);
      $scope.bikes = res;
    });
  };

  $scope.getEvents();
  $scope.getCars();
  $scope.getBikes();
});
