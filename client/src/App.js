import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import FindGame from "./components/Find-Game";
import Footer from "./components/Footer";
import Login from "./components/Log-in";
import Signup from "./components/Sign-up";

function App() {
  const [navLinks] = useState([
    {
      name: "Home",
    },
    {
      name: "Dashboard",
    },
    {
      name: "Find Game",
    },
    {
      name: "Login",
    },
    {
      name: "Signup",
    },
  ]);

  const [currentNavLink] = useState(navLinks[0]);
  const renderLink = navLinks.filter((link) => link.name === link);

  return (
    <div>
      <Nav
        navLinks={navLinks}
        setcurrentNavLink
        currentNavLink={currentNavLink}
        renderLink={renderLink}
      ></Nav>
      <main>
        <div>Find Games</div>
      </main>
    </div>
  );
}

export default App;
