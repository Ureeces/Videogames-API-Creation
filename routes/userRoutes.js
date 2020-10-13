const express = require('express');
const router = express.Router();
let games = require('../models/games');

// getAllGames
router.get('all-games', (req, res) => {
    return res.status(200).json({ confirmation: 'success', games});
});