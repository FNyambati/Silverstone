var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  car: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  horsepower: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  topSpeed: {
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

module.exports = mongoose.model('car', carSchema);
