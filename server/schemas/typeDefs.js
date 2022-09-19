const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userSkill: String
  }

  type Game {
    _id: ID
    gameLocation: String
    gameDate: String
    gameTime: String
    createdBy: String
    skillLevel: String
    players: [User]
    playerCount: Int
  }

  type Query {
    me: User
    users: [User]!
    user(_id: ID!): User
    games: [Game]!
    game(_id: ID!): Game
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): User
    addGame(
      gameLocation: String!
      gameDate: String!
      gameTime: String!
      createdBy: String!
      skillLevel: String!
    ): Game
    deleteGame(_id: ID!): Game
    addPlayer(gameId: ID, userId: ID!): Game
    removePlayer(gameId: ID, userId: ID!): Game
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
