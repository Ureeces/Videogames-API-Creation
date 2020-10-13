const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Parent route
app.use('api/v1/games', userRoutes);

// Opening the ports
app.listen(port, () => {
    console.log('Listening on:', port);
})