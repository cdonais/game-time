const router = require('express').Router();
const gameRoutes = require('./game-routes');
const userRoutes = require('./user-routes');

router.use('/games', gameRoutes);
router.use('/users', userRoutes);

module.exports = router;