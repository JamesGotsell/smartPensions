
import gql from "graphql-tag";
// fix this query
export const GET_All_STAR_SHIPS = gql`
query getStarShipIds {
  allStarships {
    edges{
      node{
        id 
      }
    }
  }
}
`;