const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('api/v1/games', userRoutes);

// opening the ports
app.listen(port, () => {
    console.log('Listening on:', port);
})