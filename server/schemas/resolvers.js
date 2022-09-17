const { User, Game } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find(params).select("-__v -password");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    games: async () => {
      return Game.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    addGame: async (parent, args) => {
      const game = await Game.create(args);
      return game;
    },
  },
};

module.exports = resolvers;
