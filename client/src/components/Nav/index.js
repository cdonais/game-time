import React from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";
import Auth from "../../utils/auth";

function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <header>
      <div className="container">
        <ul className="row justify-content-center text-center">
          <h1 className="col-sm-12 col-md-4 col-lg-2 align-text-middle">
            {" "}
            Game Time{" "}
          </h1>
          <li className="col-sm-12 col-md-4 col-lg-2">
            <NavLink to="/" end={true}>
              Dashboard
            </NavLink>
          </li>
          <li className="col-sm-12 col-md-4 col-lg-2">
            <NavLink to="/creategame">Create Game</NavLink>
          </li>
          <li className="col-sm-12 col-md-4 col-lg-2">
            <NavLink to="/findgame">Find a Game</NavLink>
          </li>
          {Auth.loggedIn() ? (
            <>
              <li className="col-sm-12 col-md-4 col-lg-2">
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="col-sm-12 col-md-4 col-lg-2">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="col-sm-12 col-md-4 col-lg-2">
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
export default Nav;
