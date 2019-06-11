require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

app.get('/', (req, res) => {
  return res.send('olar');
});

app.listen(process.env.PORT || 3000);
