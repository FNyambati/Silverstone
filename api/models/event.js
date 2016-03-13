var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  userName: {
    type: String
  },
  group: {
    type: Number
  },
  host: {
    type: String
  },
  title: {
    type: String
  },
  start: {
    type: String
  },
  bike: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bike'
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'car'
  },
  img: {
    type: String
  },
});

module.exports = mongoose.model('event', eventSchema);
