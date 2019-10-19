import React from "react";
import ApolloClient from "apollo-boost";
import Launches from "./components/Launches";
import { ApolloProvider } from "react-apollo";
import spacexlogo from "./spacexlogo.png";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={spacexlogo}
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
