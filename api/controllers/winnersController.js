var Winners = require('./../models/winner');

module.exports = {

    create: function(req, res) {
        var newWinners = new Winners(req.body);
        newWinners.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

     read: function(req, res) {
        Winners
        .find({})
        .exec(function(err, result) {
          if (err) {
              res.status(500).send(err);
          } else {
              console.log(res);
              res.send(result);
          }
        });
    },

     update: function(req, res) {
        Winners.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

    delete: function(req, res) {
        Winners.findByIdAndRemove(req.params.id, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    }
};
