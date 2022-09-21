import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GAMES, QUERY_ME } from "../utils/queries";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/auth";

function FindGame() {
  const { loading, data } = useQuery(QUERY_GAMES);
  const games = data?.games || [];

  Auth.loggedIn() ? console.log("logged in") : console.log("not logged in");

  const { data: userData } = useQuery(QUERY_ME);
  const user = userData?.me || {};
  console.log(user);

  const [addPlayer, { error }] = useMutation(ADD_PLAYER);

  const handleChange = async (game) => {
    console.log(user._id);
    console.log(game._id);

    try {
      const { data } = await addPlayer({
        variables: { gameId: game._id, userId: user._id },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <h3>No Games Yet</h3>;
  } else {
    return (
      <section>
        <h2 id="find">Find a Game:</h2>

        <ul>
          {games.map((game) => (
            <li key={game._id}>
              Date: {game.gameDate}
              <br></br>
              Time: {game.gameTime}
              <br></br>
              Location: {game.gameLocation}
              <br></br>
              Skill Level: {game.skillLevel}
              <br></br>
              Playing: {game.players.length}
              <br></br>
              Players: {game.players.map((player) => player.username + ", ")}
              <br></br>
              <button
                onClick={() => {
                  handleChange(game);
                }}
              >
                Join Game!
              </button>
            </li>
          ))}
          {/* <li>Saturday, September 18th 9am Tanja King Park</li>
                <li>Monday, September 19th 5pm Weston Regional Park</li> */}
        </ul>
      </section>
    );
  }
}

export default FindGame;
