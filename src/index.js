require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

app.listen(process.env.PORT || 3000);
