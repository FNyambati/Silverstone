var Car = require('./../models/car');

module.exports = {

    create: function(req, res) {
        var newCar = new Car(req.body);
        newCar.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

     read: function(req, res) {
        Car
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
        Car.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

    delete: function(req, res) {
        Car.findByIdAndRemove(req.params.id, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    }
};
