var Profile = require('./../models/profile');
var User = require('./../models/user');

module.exports = {

    create: function(req, res) {
        var newProfile = new Profile(req.body);
        newProfile.save(function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

     read: function(req, res) {
        Profile
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
        Profile.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    },

    delete: function(req, res) {
        Profile.findByIdAndRemove(req.params.id, function(err, result) {
          if (err) {
              return res.status(500).send(err);
          } else {
              res.send(result);
          }
        });
    }
};
