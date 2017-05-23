const Employee = require ('../models/employee');

const EmployeeCommentsController = {
  store (req, res) {
    const comment = {
      _authorId: req.body._authorId,
      body: req.body.text,
      date: new Date()
    };

    Employee.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, {new: true},  function(err, customer) {
      if (err)
        res.send(err);
      res.json(customer);
    });
  },
};

module.exports = EmployeeCommentsController;
