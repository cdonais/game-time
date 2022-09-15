const { User } = require('../../models');

const userController = {
    //get all Users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err)
            })
    },
    //create User
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found.'});
                    return;
                }
                res.json(dbUserData);
            })
                .catch(err => res.status(400).json(err));
    }

}

module.exports = userController;