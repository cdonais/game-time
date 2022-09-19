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
import Dashboard from "./pages/Dashboard";
import CreateGame from "./pages/CreateGame";
import FindGame from "./pages/FindGame";
// import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: "/graphql",
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
          <Route path="*" element={<h1>404: This Isn't A Real Page Fool</h1>} />
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
