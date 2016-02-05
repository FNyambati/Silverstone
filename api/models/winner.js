var mongoose = require('mongoose');

var winnerSchema = mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  driver: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('winner', winnerSchema);
