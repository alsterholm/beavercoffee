const Order = require('../models/order');
const ObjectId = require('mongoose').Schema.Types.ObjectId

const ReportsController = {
  sales (req, res) {
    const shop = req.query.shop;
    const where = shop ? { _coffeshopId: ObjectId(shop) } : {};

    if (req.query.from && req.query.to) {
      where.date = { $gte: new Date(req.query.from), $lt: new Date(req.query.to) };
    }

    Order.find(where, function(err, orders) {
      if (err) res.send(err);

      const count = orders.length;
      let revenue = 0;

      for(let order of orders) {
        revenue += order.totalPrice;
      };

      res.json({ count, revenue });
    });
  },

  employees (req, res) {
    const where = { _employeeId: ObjectId(req.params.employee) };

    if (req.query.from && req.query.to) {
      where.date = { $gte: new Date(req.query.from), $lt: new Date(req.query.to) };
    }

    Order.find(where, function(err, orders) {
      if(err) res.send(err);

      const count = orders.length;
      let revenue = 0;

      for(let order of orders) {
        revenue += order.totalPrice;
      };

      res.json({ count, revenue });
    });
  },
};

module.exports = ReportsController;
