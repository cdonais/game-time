import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import CreateGame from "./components/Create-Game";
import FindGame from "./components/Find-Game";
// import Footer from "./components/Footer";
import Login from "./components/Log-in";
import Signup from "./components/Sign-up";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/findgame" element={<FindGame />} />
          <Route path="/creategame" element={<CreateGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
