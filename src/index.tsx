import { ApolloProvider } from "@apollo/react-common";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

import { persistCache  } from 'apollo-cache-persist';
import React from "react";
import { render } from "react-dom";
import { App } from "./components/App/App";


import { ADD_RESULT, GET_RESULTS } from '../src/graphql/queries/getResults'


const cache = new InMemoryCache({
  addTypename: true,
})



export const resolvers = {
  Mutation: {
    addResult: (_, result, { cache }) => {
      // debugger
      const localData = cache.readQuery({
        query: GET_RESULTS 
      })
      console.log(localData)
      // const queryData = cache.readQuery({query: ADD_RESULT, variables: {wonBy: "", gameNumber: 0 , __typename: "Result" }})
      // console.log( queryData)
      let new_result = {
        wonBy: result.wonBy,
        gameNumber: result.gameNumber,
        __typename: result.__typename
      };

      // const results = cache.readQuery({  query:  GET_RESULTS, variables: {wonBy: "", gameNumber: 0 , __typename: "Result" } })
      // const { results } = cache.readQuery({ query:  GET_RESULTS, variables: { wonBy: "", gameNumber: 0 },  __typename: "result" });
      
      const stuff = [localData.results, new_result]

      cache.writeData({
        query: ADD_RESULT,
        data: {
          results: stuff,
          __typename: "Result"
        },
        variables: {
          wonBy: result.wonBy,
           gameNumber: result.gameNumber,
          __typename: result.__typename
        
        }
      });

      return new_result;
    }
  }
};

persistCache({
  cache,
  storage: window.localStorage,
});
export const client = new ApolloClient({
  cache: cache,
  resolvers: resolvers,

  uri: " http://localhost:49319"
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
