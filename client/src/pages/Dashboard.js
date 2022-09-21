import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  const upcomingGames = data?.me.userGames || [];
  console.log(upcomingGames);

  if (loading) {
    return <h3>No Games Yet</h3>;
  } else {
    return (
      <section className="container">
      <h2 className="row justify-content-center">Sign Up:</h2>
      <form
        onSubmit={handleFormSubmit}
        className="row justify-content-center text-center"
      >
        <label>
          <div>Email:</div>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <div>Username:</div>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label className="col-sm-12 mb-4">
          <div>Password:</div>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit" className="w-50">
            Submit
          </button>
        </div>
      </form>
};

export default Dashboard;
