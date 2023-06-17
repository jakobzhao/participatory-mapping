const express = require('express');
const cors = require('cors');
const app = express();
const index = require('./routes/index');
const userRoute = require('./routes/product.routes');
let corsOptions = {
    origin: ['https://jakobzhao.github.io', 'http://127.0.0.1:5501',
            'http://127.0.0.1:53369', 'http://127.0.0.1:3000', 'http://127.0.0.1:5500', 'http://hgis.uw.edu','https://hgis.uw.edu' ],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(index);
app.use('/api/',userRoute);

module.exports = app;