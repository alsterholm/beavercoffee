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
  occupation: String,
  barcode:    String,
});

const model = mongoose.model('Customer', schema);

module.exports = model;
