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
    },
    {
      _id: 2,
      gameDate: "Wednesday 26th September, 2022",
      gameTime: "11am",
      gameLocation: "New York",
      skillLevel: "Veteran",
    },
    {
      _id: 3,
      gameDate: "Thursday 27th September, 2022",
      gameTime: "4pm",
      gameLocation: "California",
      skillLevel: "Master",
    },
    {
      _id: 4,
      gameDate: "Thursday 27th September, 2022",
      gameTime: "5pm",
      gameLocation: "Miami",
      skillLevel: "Legendary",
    },
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
                    <ul className="d-flex flex-row justify-content-center">
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
