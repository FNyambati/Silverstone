var Event = require('./../models/event');
var Car = require('./../models/car');
var Bike = require('./../models/bike');
var User = require('.././models/user');



module.exports = {

  create: function(req, res) {
    var newEvent = new Event(req.body);
    newEvent.save(function(err, result) {
      if (err) {

        console.log(err);
        return res.status(500).send(err);

      } else {
        res.send(result);
      }
    });
  },
  read: function(req, res) {
    Event
      .find({})
      .exec(function(err, event) {
        if (err) {
          res.status(500).send(err);
        } else {
          console.log(res);
          for (i = 0; i < event.length; i++) {
            if (!event[i].allowed) {
              event.splice(i, 1);
            }
          }
          res.send(event);
        }
      });
  },
  pendingEvents: function(req, res) {
    Event
      .find({
        allowed: false
      })
      .exec(function(err, event) {
        if (err) {
          res.status(500).send(err);
        } else {

          res.send(event);
        }
      });
  },

  readUserEvent: function(req, res) {
    var userID = req.user._id;
    Event
      .findOne({
        user: userID
      })
      .exec(function(err, result) {
        console.log(result);
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      });
  },

  update: function(req, res) {
    Event.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },
  delete: function(req, res) {
    Event.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }
};
