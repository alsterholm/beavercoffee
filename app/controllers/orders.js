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

    Order.create(Object.assign({}, body, { finalized: false, date: new Date() }), (err, model) => {
      if (err) console.log(err);

      res.send(model);
    });
  },

  finalize (req, res) {
    Order.findById(req.params.id, (err, o) => {
      o.finalized = true;
      o.save();

      const products = o.products; // [{ id: "ajwndjkakdniada2kawd", quantity: 3 } ]

      Coffeeshop.findById(o._coffeeshopId, (err, cs) => {
        if (err)
          res.send(err);  

        // Decrease stock and calculate totalprice
        let total = 0;
        cs.products.forEach(p => {
          console.log(products);
          console.log(p);
          p.quantity -= products.find(k => k._id == p._id).quantity;
          total += p.price * products.find(k => k.id == p._id).quantity;
        });
        body.totalPrice = total;
        // save coffeeshop
        cs.save();
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
