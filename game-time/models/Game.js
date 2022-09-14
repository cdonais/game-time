const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    gameLocation: {
        type: String
    },
    gameDate: {
        type: Date
    }
    //gameTime

    // createdBy: {
    //     type: 
    // }

    // player count--integer
    
    //array of player names

    // skill level
})

const User = model('Game', GameSchema);

module.exports = User;