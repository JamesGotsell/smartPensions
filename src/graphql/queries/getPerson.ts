
import gql from "graphql-tag";

export const GET_PERSON = gql`
query getPerson($id: ID) {
  person(id: $id) {
    name
    height
    birthYear
    gender
  }
}
`;