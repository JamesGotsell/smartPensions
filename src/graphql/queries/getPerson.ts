
import gql from "graphql-tag";

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