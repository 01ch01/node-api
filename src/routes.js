const express = require('express');
const routes = express.Router();
const ProductController = require('./controller/ProductController');

// show
routes.get('/products', ProductController.index);

// details
routes.get('/products/:id', ProductController.show);

// create
routes.post('/products', ProductController.store);

//
routes.put('/products/:id', ProductController.update);

//
routes.delete('/products/:id', ProductController.destroy);

// export to use as an external file
module.exports = routes;
