const router = require('express').Router();
const {
    getAllGames,
    getGameById,
    createGame,
    deleteGame
} = require('../controllers/game-controller');

router
  .route('/')
  .get(getAllGames)
  .post(createGame);

router
  .route('/:id')
  .get(getGameById)
  .delete(deleteGame);

module.exports = router;