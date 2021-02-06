
import gql from "graphql-tag";

export const GET_RESULTS = gql`
 query GetResults {
    gameResults @client
  }
`;
