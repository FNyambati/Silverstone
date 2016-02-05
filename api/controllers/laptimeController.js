var Laptime = require('./../models/laptime');

module.exports = {

    create: function(req, res) {
        var newLaptime = new Laptime(req.body);
        newLaptime.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

     read: function(req, res) {
        Laptime
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
        Laptime.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

    delete: function(req, res) {
        Laptime.findByIdAndRemove(req.params.id, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    }
};
