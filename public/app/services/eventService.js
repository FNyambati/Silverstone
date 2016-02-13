angular.module('myApp').service('eventService', function($http){


this.getEvents = function () {
  return $http({
      method: 'GET',
      url: '/events'
  }).then(function (res) {
      return res.data;
});
};
this.addEvent = function(event) {
  return $http({
      method: 'POST',
      url: '/admin/eventAdmin',
      data: {
        name: event.name,
        date: event.date,
        end: event.end,
        user: event.user._id,
        car: event.user._id,
        bike: event.user._id
      }
  }).then(function (res) {
      console.log('EVENT CREATED IN SERVICE!');
  });
};
this.updateEvent = function(event) {
  return $http({
      method: 'PUT',
      url: '/event/' + event._id,
      data: event
  }).then(function (res) {
      console.log('UPDATED EVENT IN SERVICE!');
  });
};

  });
