const express = require('express');
const router = express.Router();
let games = require('../models/games');


const {
    getAllGames,
    getSingleGame,
    createGame,
    updateGame,
    deleteGame
} = require('../controllers/userController');

// getAllGames
router.get('/getAllGames', getAllGames);

// getSingleGame
router.get('/getSingleGame/:id', getSingleGame);

// createGame
router.post('/createGame', createGame);

// updateGame
router.put('/updateGame/:id', updateGame);

// deleteGame
router.delete('/deleteGame/:id', deleteGame);

module.exports = router;