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
    gameName: String
    createdBy: String
    skillLevel: String
    players: [User]
    playerCount: Int
  }

  type Query {
    me: User
    users: [User]!
    user(username: String!): User
    games: [Game]!
    game(_id: ID!): Game
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGame(
      gameName: String!
      createdBy: String!
      gameLocation: String!
      skillLevel: String!
    ): Game
    addPlayer(_id: ID!, player: String!): Game
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
