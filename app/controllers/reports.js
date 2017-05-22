const ReportsController = {
  sales (req, res) {
    // Generate a sales report
  },

  products (req, res) {
    // Generate a sales report for a given product
  },

  geography (req, res) {
    const type = req.query.type; // type can be zip/city/occupation

    // Do something with type
  },

  employees (req, res) {
    // Generate orders report for a given employee
  },

  customers (req, res) {
    // Generate orders report for a given employee
  },
};

module.exports = ReportsController;
