const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  // read / listing
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  },

  // details
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  // create
  async store(req, res) {
    // wait a body JSON api info response
    // req.body = api data in JSON forma t
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    });
    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },

  // update
  // delete
};
