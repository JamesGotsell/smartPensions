import gql from "graphql-tag";

export const GET_PERSON = gql`
 query getIds {
  allPeople{
  	edges{
      node {
        id
      }
    }
  }
}
`;
