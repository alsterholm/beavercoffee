const Order = require('../models/order');
const ObjectId = require('mongoose').Schema.Types.ObjectId

const ReportsController = {
  sales (req, res) {
    //todo for a time period
    const shop = req.query.shop;
    console.log(shop);

    if (shop) {
      // this.salesForShop(shop, req, res);
      Order.find({_coffeshopId: ObjectId(shop)}, function(err, orders) {
        if (err) res.send(err);
        console.log(orders);
        const count = orders.length;
        let revenue = 0;
        for(let order of orders) {
          revenue += order.totalPrice;
        };

        res.json({ count, revenue });
      });
    } else {
      // this.salesForAllShops(req, res);
      Order.find({}, function(err, orders) {
        if (err) res.send(err);

        const count = orders.length;
        let revenue = 0;
        for(let order of orders) {
          revenue += order.totalPrice;
        };
        console.log(revenue);
        res.json({ count, revenue });
      });
    }
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
