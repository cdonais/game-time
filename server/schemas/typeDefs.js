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
    skillLevel: String
    playerArray: [User]
    playerCount: Int
  }

  type Query {
    users: [User]!
    user(username: String!): User
    games: [Game]!
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addGame(gameName: String!, gameLocation: String!, skillLevel: String!): Game
  }
`;

module.exports = typeDefs;
