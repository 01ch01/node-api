const express = require('express');
const routes = express.Router();
const ProductController = require('./controller/ProductController');

// first route
// routes.get('/products', ProductController.index);

// show
routes.get('/products', ProductController.index);

// create
routes.post('./products', ProductController.store);

// export to use as an external file
module.exports = routes;
