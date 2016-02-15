angular.module('myApp').service('eventService', function($http) {


  this.getEvents = function() {
    return $http({
      method: 'GET',
      url: '/events'
    }).then(function(res) {
      return res.data;
    });
  };

  this.addEvent = function(event, host) {
    return $http({
      method: 'POST',
      url: '/event',
      data: {
        title: event.title,
        userName: host.name.first + " " + host.name.last,
        start: event.start,
        user: event.user,
        car: event.car,
        bike: event.bike,
        img: event.img,
        group: event.group,
        // rentedCar: rentedCar.car,
        // rentedBike: rentedBike.bike,

      }
    }).then(function(res) {
      console.log('EVENT CREATED IN SERVICE!');
    });
  };
  this.updateEvent = function(updateEvent) {
    return $http({
      method: 'PUT',
      url: '/event/' + updateEvent._id,
      data: {
        start: updateEvent.start
      }
    }).then(function(res) {
      console.log('UPDATED EVENT IN SERVICE!');
    });
  };
  this.deleteEvent = function(event) {
    return $http({
      method: 'DELETE',
      url: '/event/' + event._id,
      data: event
    }).then(function(res) {
      console.log('UPDATED EVENT IN SERVICE!');
    });
  };

});
