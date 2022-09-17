const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
} = require('../controllers/User-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .delete(deleteUser);

module.exports = router;