import { ApolloProvider } from "@apollo/react-common";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

import { persistCache  } from 'apollo-cache-persist';
import React from "react";
import { render } from "react-dom";
import { App } from "./components/App/App";

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.localStorage,
});
export const client = new ApolloClient({
  cache: cache,
  uri: "http://localhost:49319"
});

cache.writeData({
  data: {
    gameResults: []
  }
});


render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById("root")
);
