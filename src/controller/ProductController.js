const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  // read / listing
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

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
    // req.body = api data in JSON format
    const product = await Product.create(req.body);
    return res.json(product);
  },

  // update
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
    });
    return res.json(product);
  },

  // delete
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  },
};
