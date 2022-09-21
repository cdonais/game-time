import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GAMES, QUERY_ME } from "../utils/queries";
import { ADD_PLAYER } from "../utils/mutations";
import Auth from "../utils/auth";
import CommentBox from "../components/Comment";

function FindGame() {
  const { loading, data } = useQuery(QUERY_GAMES);
  const games = data?.games || [];

  // Auth.loggedIn() ? console.log("logged in") : console.log("not logged in");

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
  } 
    return (
      <section className="container">
        <br></br>
        <div className="row">
          <h2 id="find" className="text-center">
            Find a Game:
          </h2>
        </div>

        <ul className="row justify-content-center">
          {games.map((game) => (
            <li
              key={game._id}
              className="col-sm-12 col-md-4 col-lg-3 col-xl-3 justify-content-center"
            >
              <div className="">
                {" "}
                <span className="text-black">DATE: </span>
                {game.gameDate}
                <br></br>
                <span className="text-black">TIME: </span>
                {game.gameTime}
                <br></br>
                <span className="text-black">LOCATION: </span>
                {game.gameLocation}
                <br></br>
                <span className="text-black">SKILL LEVEL: </span>
                {game.skillLevel}
                <br></br>
                <span className="text-black">PLAYING: </span>
                {game.players.length}
                <br></br>
                <span className="text-black">PLAYERS: </span>
                {game.players.map((player) => player.username + ", ")}
                <br></br>
                <br></br>
                <button
                  onClick={() => {
                    handleChange(game);
                  }}
                  className="w-100"
                >
                  Join Game!
                </button>
                <CommentBox/>
              </div>
              <div>
                <br></br>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }



export default FindGame;
