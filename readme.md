# BeaverCoffe

## Installation

```
npm install
cp .env.example .env
// Fill in appropriate data in the .env file
npm run seed
node index.js
```

## API documentation

**GET** `/orders`

Shows a list of all orders.

**GET** `/orders/:id`

Show the given order.

**PUT** `/orders/:id`

Update the given order. Only unfinalized orders can be updated. Send JSON data in the request body. Data should be structured as following:

```js
{
  _customerId: ObjectId,
  _employeeId: ObjectId,
  _coffeeshopId: ObjectId,
  date: Date,
  totalPrice: Number,
  products: [
    {
      id: ObjectId,
      name: String,
      quantity: Number,
      price: Number,
      extras: [String]
    }
  ]
}
```

**DELETE** `/orders/:id`

Delete the given order. Only unfinalized orders can be deleted.

**POST** `/orders`

Create a new order. Send JSON data in the request body. Data should be structured as following:

```js
{
  _customerId: ObjectId,
  _employeeId: ObjectId,
  _coffeeshopId: ObjectId,
  totalPrice: Number,
  products: [
    {
      id: ObjectId,
      name: String,
      quantity: Number,
      price: Number,
      extras: [String]
    }
  ]
}
```

**POST** `/orders/:id/finalize`

Finalize an order.

**GET** `/customers`

Shows a list of all customers.

**GET** `/customers/:id`

Show the given customer.

**POST** `/customers`

Create a new customer.  Send JSON data in the request body. Data should be structured as following:

```js
{
  name: String,
  ssn:  String,
  address: {
    street: String,
    state: String,
    city: String,
    zip: String
  },
  occupation: String,
  barcode: String
}
```

**PUT** `/customers/:id`

Update an existing customer. Send JSON data in the request body. Data should be structured as following:

```js
{
  name: String,
  ssn:  String,
  address: {
    street: String,
    state: String,
    city: String,
    zip: String
  },
  occupation: String,
  barcode: String
}
```

**GET** `/products`

Shows a list of all products.

**POST** `/products`

Create a new product. Send JSON data in the request body. Data should be structured as following:

```js
{
  name: String
}
```

**GET** `/employees`

Shows a list of all employees.

**POST** `/employees`

Create a new employee. Send JSON data in the request body. Data should be structured as following:

```js
{
  name: String,
  ssn:  String,
  address: {
    street: String,
    state: String,
    city: String,
    zip: String
  },
  _coffeshopId: ObjectId,
  position: String,
  employmentPercent: Number,
  startDate: Date,
  endDate: Date
}
```

**PUT** `/employees/:id`

Update an existing employee. Send JSON data in the request body. Data should be structured as following:

```js
{
  name: String,
  ssn:  String,
  address: {
    street: String,
    state: String,
    city: String,
    zip: String
  },
  _coffeshopId: ObjectId,
  position: String,
  employmentPercent: Number,
  startDate: Date,
  endDate: Date
}
```


**POST** `/employees/:id/comments`

Create a new comment on a employee. Send JSON data in the request body. Data should be structured as following:

```js
{
  _authorId: ObjectId,
  text: String
}
```

**GET** `/reports/sales`

Get a report of all sales. Optional `shop` query parameter can be supplied with the id of a coffeeshop, then filters the sales to only contain orders of that shop.

To search within a time period, use the query parameters `from` and `to` which must be formatted as `YYYY-MM-DD`, e.g. `reports/sales?from=2017-02-01&to=2017-05-01`. Both parameters must be supplied if you want to search within a time period.

**GET** `reports/orders/:employeeId`

Get a report of all sales for a given employee.

To search within a time period, use the query parameters `from` and `to` which must be formatted as `YYYY-MM-DD`, e.g. `reports/sales?from=2017-02-01&to=2017-05-01`. Both parameters must be supplied if you want to search within a time period.
