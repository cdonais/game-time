import { gql } from "@apollo/client";

// USER QUERIES

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      password
      userSkill
    }
  }
`;

export const QUERY_USER = gql`
  query getSingleUser($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
      userSkill
    }
  }
`;

// GAME QUERIES

export const QUERY_GAMES = gql`
  query Games {
    games {
      _id
      gameLocation
      gameDate
      gameTime
      createdBy
      skillLevel
      players {
        _id
        username
      }
      playerCount
    }
  }
`;

export const QUERY_GAME = gql`
  query getSingleGame($id: ID!) {
    game(_id: $id) {
      _id
      gameLocation
      gameDate
      gameTime
      players {
        username
        userSkill
        _id
        email
        password
      }
    }
  }
`;

// ME QUERY

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      userGames {
        _id
        gameLocation
        gameDate
        gameTime
        createdBy
        skillLevel
      }
    }
  }
`;
