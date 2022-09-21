import { gql } from "@apollo/client";

// LOGIN
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// USER MUTATIONS

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
      username
    }
  }
`;

// GAME MUTATIONS

export const ADD_GAME = gql`
  mutation addGame(
    $gameLocation: String!
    $gameDate: String!
    $gameTime: String!
    $createdBy: String!
    $skillLevel: String!
  ) {
    addGame(
      gameLocation: $gameLocation
      gameDate: $gameDate
      gameTime: $gameTime
      createdBy: $createdBy
      skillLevel: $skillLevel
    ) {
      gameLocation
      gameDate
      _id
      gameTime
      createdBy
      skillLevel
      playerCount
    }
  }
`;

export const DELETE_GAME = gql`
  mutation deleteGame($id: ID!) {
    deleteGame(_id: $id) {
      _id
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($userId: ID!, $gameId: ID) {
    addPlayer(userId: $userId, gameId: $gameId) {
      gameLocation
      gameDate
      _id
      gameTime
      createdBy
      skillLevel
      players {
        username
        _id
      }
    }
  }
`;

export const REMOVE_PLAYER = gql`
  mutation RemovePlayer($userId: ID!, $gameId: ID) {
    removePlayer(userId: $userId, gameId: $gameId) {
      createdBy
      gameLocation
      gameDate
      gameTime
      players {
        username
      }
      playerCount
    }
  }
`;
