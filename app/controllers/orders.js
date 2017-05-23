const Order = require('../models/order');
const Coffeeshop = require('../models/coffeeshop'); 

const OrdersController = {
  show (req, res) {
    // Show a given order
    Order.findOne({_id: req.params.id}, function(err, order) {
      if(err)
        res.send(err);
      res.json(order);
    });
  },

  store (req, res) {
    let body = req.body;
    const products = body.products; // [{ id: "ajwndjkakdniada2kawd", quantity: 3 } ]

    Coffeeshop.findById(req.body._coffeeshopId, (err, cs) => {
      if (err)
        res.send(err);

      // Decrease stock and calculate totalprice
      let total = 0;
      cs.products.forEach(p => {
        p.quantity -= products.find(k => k.id == p._id).quantity;
        total += p.price * products.find(k => k.id == p._id).quantity;
      });
      body.totalPrice = total;
      // save coffeeshop
      cs.save();

      // create order and save to db
      body.date = new Date();
      Order.create(body, (err, model) => {
        if (err) console.log(err);

        res.send(model);
      });
    });
  },

  update (req, res) {
    // Update a given order
    Order.findOneAndUpdate({_id: req.params.id}, req.body, function(err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  },

  delete (req, res) {
    // Delete a given order

  },
};

module.exports = OrdersController;
