import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import CreateGame from "./components/Create-Game";
import FindGame from "./components/Find-Game";
// import Footer from "./components/Footer";
import Login from "./components/Log-in";
import Signup from "./components/Sign-up";

function App() {

  return (
    <Router>
      <h1>Game Time</h1>
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/findgame" element={<FindGame/>}/>
        <Route path="/creategame" element={<CreateGame/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
