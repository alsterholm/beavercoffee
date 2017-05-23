const Customer = require('../models/customer');

const CustomersController = {
  index (req, res) {
    // List all customers
    const filter = req.query.filter; // todo fix filter!!
    Customer.find({}, function (err, customers){
      if (err)
        res.send(err);
      res.json(customers);
    });
  },

  show (req, res) {
    // Show details about a given customer
    Customer.find({_id: req.params.id}, function (err, customer){
      if (err)
        res.send(err);
      res.json(customer);
    });

  },

  store (req, res) {
    // Register a new customer
    const new_customer = new Customer(req.body);
    new_customer.save(function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  },

  update (req, res) {
    //updates a customer
    Customer.findOneAndUpdate({_id: req.params.id}, req.body, function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  },

};

module.exports = CustomersController;
