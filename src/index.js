const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('olar');
});

app.listen(process.env.PORT || 3000);
