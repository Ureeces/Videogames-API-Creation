const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;