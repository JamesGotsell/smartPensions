import { ApolloProvider } from "@apollo/react-common";
import ApolloClient from "apollo-boost";
import React from "react";
import { render } from "react-dom";
import { App } from "./components/App/App";

const client = new ApolloClient({
  uri: "http://localhost:56068/"
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
