// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require('./product');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/product', (req, res) => {
  res.json(products);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
