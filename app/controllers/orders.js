const Order = require('../models/order');

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
    Order.create(req.body, (err, model) => {
      if (err) console.log(err);

      res.send(model);
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
