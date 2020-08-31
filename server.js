const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// init app
const app = express();

// init database
const url = 'mongodb://localhost:27017/nodeapi';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// recognizing all models in src/models folder (thankful to requireDir)
requireDir('./src/models');

// instance of a model
const Product = mongoose.model('Product');

// first route
app.get('/', (req, res) => {
  // creating fake Product
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native',
  });

  console.log('hello, friend.');
  return res.send('goodbye, friend.');
});

app.listen(3001);
