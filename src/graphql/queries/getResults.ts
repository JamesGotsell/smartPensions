
import gql from "graphql-tag";

export const GET_RESULTS = gql`
 query GetResults {
    results @client {
          wonBy
         gameNumber
        __typename
    }
  }
`;

export const ADD_RESULT = gql`
  mutation addResult($wonBy: String,  $gameNumber: Int, $__typename:string) {
    addResult(wonBy: $wonBy, gameNumber: $gameNumber, __typename: $__typename) @client {
          wonBy
         gameNumber
         __typename
    }
  }
`;
