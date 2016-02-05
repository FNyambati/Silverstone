angular.module('myApp').controller('calendarCtrl', function($scope) {

  $(document).ready(function() {

    $('#calendar').fullCalendar({
      theme: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay',
      },
      defaultDate: moment(),
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [{
        title: 'All Day Event',
        start: '2016-01-01'
      }, {
        title: 'Long Event',
        start: '2016-01-07',
        end: '2016-01-10'
      }],
      themeButtonIcons: {
        prev: 'circle-triangle-w',
        next: 'circle-triangle-e',
      }
    });

  });
});
