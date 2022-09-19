import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../utils/queries";

function FindGame() {
  const { loading, data } = useQuery(QUERY_GAMES);
  const games = data?.games || [];
  if (!games.length) {
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
              <button>Join Game!</button>
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
