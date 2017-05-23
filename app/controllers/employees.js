const Employee = require ('../models/employee');

const EmployeesController = {
  index (req, res) {
  	//list all employees
  	Employee.find({}, function(err, employees) {
  		if (err)
  			res.send(err);
  		res.json(employees);
  	});
  },

  store (req, res) {
  	// create new employee
  	req.body.startDate = new Date();
  	const new_employee = new Employee(req.body);
  	new_employee.save(function(err, employee) {
  		if(err)
  			res.send(err);
  		res.json(employee);
  	});
  },

  update (req, res) {
  	// update employee
  	
  },

};

module.exports = EmployeesController;
