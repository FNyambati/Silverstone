var mongoose = require('mongoose');

var plannerSchema = mongoose.Schema({
  bike: {
    type: String,
    required: true
  },
  car: {
    type: String,
    required: true,
    ref:'car'
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('planner', plannerSchema);
