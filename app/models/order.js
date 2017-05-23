const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  _customerId: mongoose.Schema.Types.ObjectId,
  _employeeId: mongoose.Schema.Types.ObjectId,
  _coffeshopId: mongoose.Schema.Types.ObjectId,
  date: Date,
  totalPrice: Number,
  products: [{
    _productId: mongoose.Schema.Types.ObjectId,
    name: String,
    quantity: Number,
    price: Number,
    extras: [String],
  }],
});

const model = mongoose.model('Order', schema);

module.exports = model;
