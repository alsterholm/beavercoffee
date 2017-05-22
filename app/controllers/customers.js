const Customer = require('../models/customer');

const CustomersController = {
  index (req, res) {
    // List all customers
    const filter = req.query.filter;
    Customer.find({}, function (err, customers){
      if (err)
        res.send(err);
      res.json({data: customers});
    });
  },

  show (req, res) {
    // Show details about a given customer
  },

  store (req, res) {
    const customer = new Customer(req.body);
    customer.save(function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
    // Register a new customer
  },

  update (req, res) {

  },
};

module.exports = CustomersController;
