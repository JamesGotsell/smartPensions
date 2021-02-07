import React from "react";

import { GET_RESULTS } from '../../graphql/queries/getResults'


import {
  Query
} from "react-apollo"


export const Results: React.FC  = () => (
       <Query query={GET_RESULTS}>
       {({ loading, data }) => {
         console.log(data)
         if (loading) {
           return <h1>loading...</h1>
         }
         if(!data) {
          return <div>No results</div>
         }
         return <div>boom</div>
       }}
     </Query>
  
)
