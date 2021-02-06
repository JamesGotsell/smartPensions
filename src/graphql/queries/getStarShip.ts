
import gql from "graphql-tag";

export const GET_STAR_SHIP = gql`
query getStartShip($id:ID, $id2: ID) {
  firstSelection:starship(id:$id){
    id
    model
    passengers
    costInCredits
    starshipClass
    maxAtmospheringSpeed
    hyperdriveRating
  }
  secondSelection:starship(id:$id2){
    id
    model
    passengers
    costInCredits
    starshipClass
    maxAtmospheringSpeed
    hyperdriveRating
  }
}

`;