const router = require('express').Router();
const gameRoutes = require('./game-routes');

router.use('/games', gameRoutes);

module.exports = router;