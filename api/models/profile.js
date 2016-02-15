var mongoose = require('mongoose');

var Profile = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  first: {
    type: String,
  },
  last: {
    type: String,
  },
  phone: {
    type: Number
  },

  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: Number,
  },
  country: {
    type: String,
  },
  userCar: {
    type: String,
  },
  laptime: {
    type: String,
  },
  isVIP: {
    type: String,
    enum: ['Professional', 'World Class', 'Legendary', 'Omega', 'none'],
    default: 'none'
  }
});

module.exports = mongoose.model('profile', Profile);
