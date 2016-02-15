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
    var userID = req.user._id;
    Profile
      .findOne({
        user: userID
      })
      .exec(function(err, result) {
        console.log(result);
        if (err) {
          res.status(500).send(err);
        } else if (!result) {
          var newProfile = new Profile({
            user: userID
          });
          newProfile.save(function(err, result) {
            if (err) {
              return res.status(500).send(err);
            } else {
              res.send(result);
            }
          });

        } else {
          res.send(result);
        }
      });
  },

  update: function(req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
};
