const { User, Game } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("user");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("user");
    },
    games: async () => {
      return Game.find();
    },
    game: async (parent, { _id }) => {
      return Game.findOne({ _id }).populate("user");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addGame: async (parent, args) => {
      const game = await Game.create(args);
      return game;
    },
    addPlayer: async (parent, { gameId, userId }, context) => {
      const username = context.user.username;
      if (context.user) {
        const updatedGame = await Game.findOneAndUpdate(
          { _id: gameId },
          { $addToSet: { players: userId, username } },
          { new: true }
        );

        return updatedGame;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      console.log(correctPw);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
