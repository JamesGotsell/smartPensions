import React from "react";

import { GET_RESULTS } from '../../graphql/queries/getResults'

import gql from "graphql-tag";
import {
  Query
} from "react-apollo"


export const Results: React.FC  = () => (
       <Query query={GET_RESULTS}>
       {({ loading, data }) => {
         if (loading) {
           return <h1>loading...</h1>
         }
   
         return <div>{data.data.gameResults}</div>
       }}
     </Query>
  
)
