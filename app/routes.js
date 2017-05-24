const CustomersController = require('./controllers/customers');
const EmployeeCommentsController = require('./controllers/employeeComments');
const EmployeesController = require('./controllers/employees');
const OrdersController = require('./controllers/orders');
const ReportsController = require('./controllers/reports');
const ProductsController = require('./controllers/products');

const routes = {};

routes.register = (app) => {
  app.get('/orders', OrdersController.index);
  app.get('/orders/:id', OrdersController.show);
  app.put('/orders/:id', OrdersController.update);
  app.delete('/orders/:id', OrdersController.delete);
  app.post('/orders', OrdersController.store);
  app.post('/orders/:id/finalize', OrdersController.finalize);

  app.get('/customers', CustomersController.index);
  app.get('/customers/:id', CustomersController.show);
  app.post('/customers', CustomersController.store);
  app.put('/customers/:id', CustomersController.update);

  app.get('/products', ProductsController.index);
  app.post('/products', ProductsController.store);

  app.get('/employees', EmployeesController.index);
  app.post('/employees', EmployeesController.store);
  app.put('/employees/:id', EmployeesController.update);

  app.post('/employees/:id/comments', EmployeeCommentsController.store);

  app.get('/reports/sales', ReportsController.sales);
  app.get('/reports/sales/:product', ReportsController.products);
  app.get('/reports/sales/geography', ReportsController.geography);
  app.get('/reports/orders/:employee', ReportsController.employees);
  app.get('/reports/orders/:customers', ReportsController.customers);
};

module.exports = routes;
