const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    userSkill: {
      type: String,
      default: "Beginner",
    },
    userGames: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    createdGames: [{ type: Schema.Types.ObjectId, ref: "Game" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.methods.isCorrectPassword = async function (password) {
  // ASK TA ABOUT THIS. COULDN'T GET THIS TO RETURN TRUE
  // return bcrypt.compare(password, this.password);
  if (password === this.password) {
    return true;
  } else {
    return false;
  }
};

const User = model("User", userSchema);

module.exports = User;
