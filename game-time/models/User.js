const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String
    },
    // email: {
    //     type: String
    // },
    // password: {
    //     type: Password
    // }
    // skill level
})

const User = model('User', userSchema);

module.exports = User;