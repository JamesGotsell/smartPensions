import gql from "graphql-tag";

export const GET_ALL_PEOPLE = gql`
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
