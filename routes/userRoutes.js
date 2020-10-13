const express = require('express');
const router = express.Router();
let games = require('../models/games');

// getAllGames
router.get('/getAllGames', (req, res) => {
    return res.status(200).json({ confirmation: 'success', games });
});

// getSingleGame
router.get('/getSingleGame/:id', (req, res) => {
    let foundGame = games.filter((game) => {
        if(game.id === req.params.id) {
            return res.status(200).json({ confirmation: 'success', game });
        }
    });

        if(!foundGame.length) {
            return res.status(400).json({ confirmation: 'fail', message: `Game not found.` })
        }
})

module.exports = router;