import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

function Dashboard() {
  // const { loading, data } = useQuery(QUERY_ME);
  // const user = data?.me || {};

  //  const upcomingGames = data?.me.userGames || [];

  const upcomingGames = [
    {
      _id: 1,
      gameDate: "Monday 24th September, 2022",
      gameTime: "1pm",
      gameLocation: "Orlando",
      skillLevel: "Legendary",
    }
  ]
  console.log(upcomingGames);

    return (
      <div className="container">
        <div className="row">
          <section id="Dashboard" className="col">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 d-flex align-items-center"></div>
                <h2 className="text-center">
                  <br></br>My Games:
                  
                </h2>
                <div className="container">
                    <ul className="row justify-content-center">
                      <li>Test</li>
                      {upcomingGames.map((game) => (
                        <li key={game._id}>
                          Date: {game.gameDate}
                          <br></br>
                          Time: {game.gameTime}
                          <br></br>
                          Location: {game.gameLocation}
                          <br></br>
                          Skill Level: {game.skillLevel}
                          <br></br>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

export default Dashboard;
