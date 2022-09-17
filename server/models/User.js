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
    userSkill: {
        type: String,
        default: 'Beginner'
    }
})

const User = model('User', userSchema);

module.exports = User;