const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  ssn:  String,
  address: {
    street: String,
    state:  String,
    city:   String,
    zip:    String,
  },
  _coffeshopId: mongoose.Schema.Types.ObjectId,
  position: String,
  employmentPercent: Number,
  startDate: Date,
  endDate: Date,
  comments: [{
    _authorId: mongoose.Schema.Types.ObjectId,
    body: String,
    date: Date,
  }],
});

const model = mongoose.model('Employee', schema);

module.exports = model;
