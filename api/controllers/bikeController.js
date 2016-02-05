var Bike = require('./../models/bike');

module.exports = {

    create: function(req, res) {
        var newBike = new Bike(req.body);
        newBike.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

     read: function(req, res) {
        Bike
        .find({})
        .exec(function(err, result) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

     update: function(req, res) {
        Bike.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

    delete: function(req, res) {
        Bike.findByIdAndRemove(req.params.id, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    }
};
