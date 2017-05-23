const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  currency: String,
  address: {
    street: String,
    state:  String,
    city:   String,
    zip:    String,
  },
  products: [{
    _id: Schema.Type.ObjectId,
    name: String,
    quantity: Number,
    price: Number,
    unit: String,
    endOfLine: Date,
  }],
});

const model = mongoose.model('Coffeshop', schema);

module.exports = model;
