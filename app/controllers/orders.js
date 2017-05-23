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
    // res.json(req.body._coffeeshopId);
    // return res.send("haha");
    let body = req.body;
    const products = body.products; // [{ id: "ajwndjkakdniada2kawd", quantity: 3 } ]
    const employee = body._employeeId;
    const customer = body._customerId;
    const coffeeshop = body._coffeeshopId;

    console.log(coffeeshop);
    Coffeeshop.findById(req.body._coffeeshopId, (err, cs) => {
      console.log(cs);
      const filteredProducts = cs.products.filter(p => {
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
        body.totalPrice += p.price * products.find(k => k.id == p.id).quantity;
      });

      cs.save();

      body.date = new Date();

      Order.create(body, (err, model) => {
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
