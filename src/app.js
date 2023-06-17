const express = require('express');
const cors = require('cors');
const app = express();
const index = require('./routes/index');
const userRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(index);
app.use('/api/',userRoute);

app.use('/', express.static('docs'))

module.exports = app;


