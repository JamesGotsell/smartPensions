import { ApolloProvider } from "@apollo/react-common";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

import { persistCache  } from 'apollo-cache-persist';
import React from "react";
import { render } from "react-dom";
import { App } from "./components/App/App";
import { resolvers } from '../src/graphql/resolver/resolver'

const cache = new InMemoryCache({
  addTypename: true,
})

persistCache({
  cache,
  storage: window.localStorage,
});
export const client = new ApolloClient({
  cache: cache,
  resolvers: resolvers,
  uri: " http://localhost:49319",
  
});

client.writeData({
    data: {
          results: [],
        __typename: "Result"
    }
});

render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById("root")
);
