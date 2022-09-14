const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    gameLocation: {
        type: String
    },
    gameDate: {
        type: Date
    }
    // createdBy: {
    //     type: 
    // }
    // skill
})

const User = model('Game', GameSchema);

module.exports = User;