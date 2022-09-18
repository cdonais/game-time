const { Schema, model } = require("mongoose");

const GameSchema = new Schema(
  {
    gameLocation: {
      type: String,
      required: true,
      trim: true,
    },
    gameName: {
      type: String,
      required: true,
      trim: true,
    },
    // gameDate: {
    //     type: Date
    // },
    // gameTime: {
    //     type: String,
    // },
    createdBy: {
      type: String,
    },
    players: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    skillLevel: {
      type: String,
      required: true,
      trim: true,
    },

    // player count--integer

    //array of player names

    // skill level
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("Game", GameSchema);

module.exports = User;
