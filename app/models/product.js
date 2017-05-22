const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  unit: String,
});

const model = mongoose.model('Product', schema);

module.exports = model;