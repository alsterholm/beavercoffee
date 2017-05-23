const Order = require('../models/order');

const ReportsController = {
  sales (req, res) {
    Order.find({}, function(err, orders) {
      if(err)
        res.send(err);
      res.json(orders); // todo count orders and sum sales!!
    });
    // Generate a sales report
  },

  products (req, res) {
    Order.find({products: {_productId: req.params.product}}, function(err, orders) {
      if(err)
        res.send(err);
      res.json(orders); // todo count orders and sum sales!!
    });
    // Generate a sales report for a given product
  },

  geography (req, res) {
    const type = req.query.type; // type can be zip/city/occupation

    // Do something with type
  },

  employees (req, res) {
    Order.find({_employeeId: req.params.employee}, function(err, orders) {
      if(err)
        res.send(err);
      res.json(orders); // todo count orders and sum sales!!
    });
    // Generate orders report for a given employee
  },

  customers (req, res) {
    Order.find({_customerId: req.params.customer}, function(err, orders) {
      if(err)
        res.send(err);
      res.json(orders); // todo count orders and sum sales!!
    });
    // Generate orders report for a given employee
  },
};

module.exports = ReportsController;
