var mongoose = require('mongoose');

var laptimeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  car: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('laptime', laptimeSchema);
