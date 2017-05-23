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
      const products = o.products; // [{ id: "ajwndjkakdniada2kawd", quantity: 3 } ]
      if (o.finalized) {
        res.send("Already finalized")
      } else {

        Coffeeshop.findById(o._coffeeshopId, (err, cs) => {
          if (err)
            res.send(err);

          // Decrease stock and calculate totalprice
          let total = 0;
          cs.products.forEach(p => {
            const prod = products.find(k => k.id == p._id)

            if (prod) {
              p.quantity -= prod.quantity;
              total += p.price * prod.quantity;
            }
          });

          o.totalPrice = total;
          o.finalized = true;

          o.save();
          cs.save();
          res.json(o);
        });
      }

    });
  },

  update (req, res) {
    // Update a given order
    Order.findById(req.params.id, function(err, order) {
      if (err)
        res.send(err);
      if(order.finalized) {
        res.send("Already finalized");
      } else {
        order = req.body;
        order.save();
        res.json(order);
      }
    });
  },

  delete (req, res) {
    // Delete a given order
    Order.findById(req.params.id, function(err, order) {
      if (err)
        res.send(err);
      if(order.finalized) {
        res.send("Already finalized");
      } else {
        order.remove();
        res.send("Order removed");
      }
    });
  },

};

module.exports = OrdersController;
