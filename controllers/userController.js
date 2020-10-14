let games = require('../models/games');

module.exports = {
    getAllGames: (req, res) => {
        return res.status(200).json({ confirmation: 'success', games });
    },

    getSingleGame: (req, res) => {
        let foundGame = games.filter((game) => {
            if(game.id === req.params.id) {
                return res.status(200).json({ confirmation: 'success', game });
            }
        });
    
            if(!foundGame.length) {
                return res.status(400).json({ confirmation: 'fail', message: `Game not found.` })
            }
    },

    createGame: (req, res) => {
        if(!req.body.name || !req.body.description) {
            return res
                .status(400)
                .json({ confirmation: 'fail', message: `Incorrect input (must have at least a name and description.)` });
        }
        
        let existingGame = games.filter((game) => game.name === req.body.name);
            if(existingGame.length) {
                return res.status(400).send("This game already exists within this API multiverse.");
            }
    
        const newGame = {};
    
        newGame.name = req.body.name;
        newGame.description = req.body.description;
        newGame.yearReleased = String(req.body.yearReleased) || 'NA';
        newGame.playTime = req.body.playTime || 'NA';
        newGame.id = String(games.length + 1);
    
        games.push(newGame);
        return res.status(200).json({ confirmation: 'success', newGame });
    },

    updateGame: (req, res) => {
        let updateGame = req.body;
            games.filter((foundGame) => {
                if(foundGame.id === req.params.id) {
                    foundGame.name = updateGame.name ? updateGame.name : foundGame.name;
                    foundGame.description = updateGame.description ? updateGame.description : foundGame.description;
                    foundGame.yearReleased = updateGame.yearReleased ? updateGame.yearReleased : foundGame.yearReleased;
                    foundGame.playTime = updateGame.playTime ? updateGame.playTime : foundGame.playTime;
                    
                }
            });
        
        return res.status(200).json({ message: 'Game was updated.', games });
    },

    deleteGame: (req, res) => {
        let removeGame = games.filter((foundGame) => foundGame.id !== req.params.id);
    
        games = removeGame;
    
        return res.status(200).json({ confirmation: 'success', games });
    }
};