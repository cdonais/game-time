const { Game } = require('../../models');

const gameController = {
    //get all games
    getAllGames(req, res) {
        Game.find({})
            .then(dbGameData => res.json(dbGameData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getGameById({ params }, res) {
        Game.findOne({ _id: params.id })
            .then(dbGameData => {
                if (!dbGameData) {
                    res.status(404).json({ message: 'No game found' });
                    return;
                }
                res.json(dbGameData);
            })
            .catch(err => {
                console.log(err)
            })
    },
    //create game
    createGame({ body }, res) {
        Game.create(body)
            .then(dbGameData => res.json(dbGameData))
            .catch(err => res.status(400).json(err));
    },
    deleteGame({ params }, res) {
        Game.findOneAndDelete({ _id: params.id })
            .then(dbGameData => {
                if (!dbGameData) {
                    res.status(404).json({ message: 'No game found.'});
                    return;
                }
                res.json(dbGameData);
            })
                .catch(err => res.status(400).json(err));
    }

}

module.exports = gameController;