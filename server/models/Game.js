const { Schema, model } = require("mongoose");

const GameSchema = new Schema(
  {
    gameLocation: {
      type: String,
      required: true,
      trim: true,
    },
    gameDate: {
      type: String,
      required: true,
      trim: true,
    },
    gameTime: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: String,
      required: true,
      trim: true,
    },
    players: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    skillLevel: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("Game", GameSchema);

module.exports = User;
