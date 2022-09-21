import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  const upcomingGames = data?.me.userGames || [];
  console.log(upcomingGames);

  if (loading) {
    return <h3>No Games Yet</h3>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <section id="Dashboard" className="col">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 d-flex align-items-center"></div>
                <h2>
                  <br></br>My Games:
                  <div>
                    <ul>
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
                </h2>
              </div>
            </div>
          </section>
          <section id="Dashboard" className="col">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 d-flex align-items-center"></div>
                <h2>
                  <br></br>Upcoming Games:
                </h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default Dashboard;
