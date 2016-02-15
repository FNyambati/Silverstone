angular.module('myApp').controller('calendarCtrl', function($scope, eventService) {

  var events = [];
  // $scope.events = [{title:"hmmm", start:'2016-02-15'}];
  $scope.getEvents = function() {
    eventService.getEvents()
      .then(function(res) {
        console.log(res);
        $scope.events = res;
        events.push($scope.events);
        $("#calendar").fullCalendar('removeEvents');
        $("#calendar").fullCalendar('addEventSource', $scope.events);
        $("#calendar").fullCalendar('rerenderEvents');
        // restartCal();
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
        $("#calendar").fullCalendar('addEventSource', $scope.events);
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

    console.log('event set at ' + event.start);

    event.start = moment(event.start).format('YYYY-MM-DD');
    eventService.addEvent(event)
      .then(function(res) {
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
  $scope.getEvents();





  $(document).ready(function() {
    // function restartCal(){


    $('#calendar').fullCalendar({
      theme: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay',
      },
      defaultDate: moment(),
      editable: true,
      droppable: true,
      selectable: true,
      eventLimit: true,
      eventMouseover: function(calEvent, jsEvent) {
        var tooltip = '<div class="tooltipevent" style=" padding: 1%; max-width: 100px; background:white; font-size:0.6em; position:absolute; z-index:10001;">' + calEvent.userName + '</div>';
        $("body").append(tooltip);
        $(this).mouseover(function(e) {
          $(this).css('z-index', 10000);
          $('.tooltipevent').fadeIn('500');
          $('.tooltipevent').fadeTo('10', 1.9);
        }).mousemove(function(e) {
          $('.tooltipevent').css('top', e.pageY + 10);
          $('.tooltipevent').css('left', e.pageX + 20);
        });
      },

      eventMouseout: function(calEvent, jsEvent) {
        $(this).css('z-index', 8);
        $('.tooltipevent').remove();
      },
      eventDrop: function(event, delta, revertFunc) {
        console.log(event);
        var updateEvent = {
          _id: event._id,
          start: event.start,
        };
        eventService.updateEvent(updateEvent);
      },
      events: $scope.events
    });
    // }
  });
});
