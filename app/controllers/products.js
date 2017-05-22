const Product = require('../models/product');

const ProductsController = {
  index (req, res) {
  	Product.find({}, function(err, products) {
  		if (err)
  			res.send(err);
  		res.json({data: products});
  	});
  },

  store (req, res) {
  	const new_product = new Product(req.body);
  	new_product.save((err, product) => {
  		if (err)
  			res.send(err);
  		res.json(product);
  	});
  },
  
};

module.exports = ProductsController;
