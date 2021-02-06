
import gql from "graphql-tag";

export const GET_PERSON = gql`
query getPerson($id: ID, $id2: ID) {
 firstSelection: person(id: $id) {
    species{
      averageLifespan
      designation
    }
    name
    height
    birthYear
    gender
  }
  secondSelection: person(id: $id2) {
    species{
      averageLifespan
      designation
    }
    name
    height
    birthYear
    gender
  }
}
`;