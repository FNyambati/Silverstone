var mongoose = require('mongoose');

var Profile = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  first: {
    type: String,
    required: false
  },
  last: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false
  },
  address1: {
    type: String,
    required: false,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zip: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  userCar: {
    type: String,
    required: false,
  },
  laptime: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('profile', Profile);
