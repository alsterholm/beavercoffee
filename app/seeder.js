'use strict';

const Coffeeshop = require('./models/coffeeshop');
const Customer = require('./models/customer');
const Employee = require('./models/employee');
const Order = require('./models/order');
const Product = require('./models/product');
const mongoose = require('mongoose');


// Fixa så vi kan använda env variablerna!! (Har kört en ny db: test1 endast för testning)
// mongoose.connect('mongodb://localhost/test1');

Product.remove({})
	.then(() => {
		Product.create(products, function(err, prod) {
			if(err)
				console.log(err);
			console.log(prod);
		});
	});

Customer.remove({})
	.then(() => {
		Customer.create(customers, function(err, cust) {
			if(err)
				console.log(err);
			console.log(cust);
		});
	});

// TODO!! Populate the products array in the shops
Coffeeshop.remove({})
	.then(() => {
		Coffeeshop.create(coffeeshops, function(err, shops) {
			if(err)
				console.log(err);
			console.log(shops);
		});
	});

Employee.remove({})
	.then(() => {
		Coffeeshop.findOne({}, function(err, shop) {
			if(err)
				console.log(err);
			for(let employee of employees) {
				employee._coffeshopId = shop._id;
			};
			Employee.create(employees, function(err, empl) {
				if(err)
					console.log(err);
			console.log(empl);
			mongoose.disconnect();
			});
		});
	});


const products = [
	{name: "Espresso Roast", unit: "kg"},
	{name: "Whole Bean French Roast", unit: "kg"},
	{name: "Whole Bean Light Roast", unit: "kg"},
	{name: "Espresso", unit: "l"},
	{name: "Latte", unit: "l"},
	{name: "Capuccino", unit: "l"},
	{name: "Hot Chocolate", unit: "l"},
	{name: "Skim Milk", unit: "l"},
	{name: "Soy Milk", unit: "l"},
	{name: "Whole Milk", unit: "l"},
	{name: "2% Milk", unit: "l"},
	{name: "Whipped Cream", unit: "l"},
	{name: "Vanilla Syrup", unit: "l"},
	{name: "Caramel Syrup", unit: "l"},
	{name: "Irish Cream Syrup", unit: "l"}
];

const customers = [
	{
	name: "Andreas",
	ssn:  "790796-6645",
	address: {
	  street: "Stoa vägen 3",
	  state:  "Skåne",
	  city:   "Malmö",
	  zip:    "21554"
	},
	occupation: "Software Developer",
	barcode:    "21155fg4fgd5"
	},
	{
	name: "Jimmy",
	ssn:  "841025-6645",
	address: {
	  street: "Envägen 3",
	  state:  "Skåne",
	  city:   "Malmö",
	  zip:    "21555"
	},
	occupation: "Dentist",
	barcode:    "121df5g5g45dd"
	},
	{
	name: "Mario",
	ssn:  "630214-6645",
	address: {
	  street: "Bankgatan 5",
	  state:  "Skåne",
	  city:   "Lund",
	  zip:    "21554"
	},
	occupation: "Plumber",
	barcode:    "54d54454554df"
	}
];

const coffeeshops = [
	{
	currency: 'SEK',
	address: {
	  street: 'Malmövägen 1',
	  state: 'Skåne',
	  city: 'Malmö',
	  zip: '21554',
	},
	products: [], // fetch products from db
	},
	{
	currency: 'SEK',
	address: {
	  street: 'Lundvägen 1',
	  state: 'Skåne',
	  city: 'Lund',
	  zip: '25821',
	},
	products: [],  // fetch products from db
	}
];

const employees = [
	{
	name: "Kalle",
	ssn:  "891201-2654",
	address: {
	  street: "Lundavägen 1",
	  state:  "Skåne",
	  city:   "Malmö",
	  zip:    "21546",
	},
	_coffeshopId: null,
	position: "Clerk",
	employmentPercent: 75,
	startDate: new Date(),
	endDate: null,
	comments: []
	},
	{
	name: "Göran",
	ssn:  "691201-2654",
	address: {
	  street: "Bulltoftavägen 1",
	  state:  "Skåne",
	  city:   "Malmö",
	  zip:    "21546",
	},
	_coffeshopId: null,
	position: "Manager",
	employmentPercent: 100,
	startDate: new Date(),
	endDate: null,
	comments: []
	},
];

const orders = [
	{

	}
];