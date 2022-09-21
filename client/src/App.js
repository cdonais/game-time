import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import CreateGame from "./pages/CreateGame";
import FindGame from "./pages/FindGame";
import Footer from "./components/Footer";
import SocialLinks from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <body className="flex">
        <Router>
          <Nav />
          <main className="h-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/findgame" element={<FindGame />} />
              <Route path="/creategame" element={<CreateGame />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="*"
                element={<h1>404: This Isn't A Real Page Fool</h1>}
              />
            </Routes>
          </main>
          <Footer>
            <SocialLinks></SocialLinks>
          </Footer>
        </Router>
      </body>
    </ApolloProvider>
  );
}

export default App;
