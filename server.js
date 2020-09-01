const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const routes = require('./src/routes');

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

// routes
app.use('/api', require('./src/routes'));
app.listen(3001);
