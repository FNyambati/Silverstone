var mongoose = require('mongoose');

var bikeSchema = mongoose.Schema({
  bike: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  cc: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  topSpeed:  {
  type: Number,
  required: true
  },
  sixty: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String
  }
});

module.exports = mongoose.model('bike', bikeSchema);
