var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  group: {
    type: Number
  },
  name: {
    type: String
  },
  date: {
    type: String
  },
  type: {
    trackDay:{
      type: Boolean
    },
    tournament: {
      type: Boolean
    },
    education:{
      type: Boolean
    },
    meetUp:{
      type: Boolean
    },
  },
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bike'
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'car'
  },
  allowed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('event' ,eventSchema);
