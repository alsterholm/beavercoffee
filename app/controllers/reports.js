const Order = require('../models/order');

const ReportsController = {
  sales (req, res) {
    //todo for a time period
    const shop = req.query.shop;

    if (shop) {
      this.salesForShop(shop, req, res);
    } else {
      this.salesForAllShops(req, res);
    }
  },

  salesForShop (shop, req, res) {
    Order.find({_coffeshopId: shop}, function(err, orders) {
      if (err) res.send(err);

      const count = orders.length;
      const revenue = orders.reduce((acc, o) => {
        acc + o.totalPrice;
      }, 0);

      res.json({ count, revenue });
    });
  },

  salesForAllShops (req, res) {
    Order.find({}, function(err, orders) {
      if (err) res.send(err);

      const count = orders.length;
      const revenue = orders.reduce((acc, o) => {
        acc + o.totalPrice;
      }, 0);

      res.json({ count, revenue });
    });
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
