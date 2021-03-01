const express = require('express');

require('dotenv').config();

const app = express();

//Middleware
const bodyParser = require("body-parser");
const morgan   = require('morgan');
const cors     = require('cors');

//Importing routes
const routes = require('../routers/routes')

//Database connecton
require("./database/connection");

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.use(routes);

app.listen(3000, () => {
     console.log('Server Started....')
});
