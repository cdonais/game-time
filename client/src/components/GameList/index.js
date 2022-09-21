import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GAMES } from "../../utils/queries";

function GameList() {
  const { loading, data } = useQuery(QUERY_GAMES);
  const games = data?.games || [];

  return (
    <div>
      <h2>Game List</h2>
      {games &&
        games.map((game) => (
          <div key={game._id} className="card mb-3">
            <p className="card-header">
              <span style={{ fontWeight: 700 }} className="text-light">
                {game.title}
              </span>{" "}
              created by {game.username}
            </p>
            <div className="card-body">
              <p>{game.description}</p>
              <p>
                <span style={{ fontWeight: 700 }}>Players: </span>
                {game.players}
              </p>
              <p>
                <span style={{ fontWeight: 700 }}>Date: </span>
                {game.date}
              </p>
              <p>
                <span style={{ fontWeight: 700 }}>Time: </span>
                {game.time}
              </p>
              <p>
                <span style={{ fontWeight: 700 }}>Location: </span>
                {game.location}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default GameList;
