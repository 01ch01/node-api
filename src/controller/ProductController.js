const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  // show products
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  },

  // save/create
  async StorageEvent(res, res) {},
};
