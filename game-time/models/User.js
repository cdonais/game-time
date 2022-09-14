const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String
    },
    // skill level
})

const User = model('User', userSchema);

module.exports = User;