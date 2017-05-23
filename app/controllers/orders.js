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
    const products = req.body.products; // [{ id: "ajwndjkakdniada2kawd", quantity: 3 } ]
    const employee = req.body.employee;
    const customer = req.body.customer;

    Coffeeshop.findOne({_id: req.params.id}, (err, cs) => {
      const filteredProducts = coffeshop.products.filter(p => {
        const productIds = products.map(k => k.id);
        return productIds.contains(p._id);
      })

      filteredProducts.forEach(p => {
        if (p.quantity < products.find(k => k.id == p.id).quantity) {
          return res.send('Cannot place order');
        }
      });

      cs.products.forEach(p => {
        p.quantity -= products.find(k => k.id == p.id).quantity;
      });

      cs.save();

      Order.create({ some_fucking_data: ":)" }, (err, model) => {
        if (err) console.log(err);

        res.send(model);
      });
    })
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
