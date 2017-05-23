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
    Employee.findByid(request.params.id, (err, empl) => {
      const {
        name, ssn, address, position, employmentPercent,
        startDate, endDate, _coffeeshopId
      } = empl;

      const newEmpl = {
        name: request.body.name || name,
        ssn: request.body.ssn || ssn,
        address: request.body.address || address,
        _coffeeshopId: request.body._coffeeshopId || _coffeeshopId,
        position: request.body.position || position,
        employmentPercent: request.body.employmentPercent || employmentPercent,
        startDate: request.body.startDate || startDate,
        endDate: request.body.endDate || endDate
      };

      empl.endDate = Date.now();
      empl.save();

      Employee.create(newEmpl, (err, createdEmpl) => {
        res.json(createdEmpl);
      });
    });
  },

};

module.exports = EmployeesController;
