
import gql from "graphql-tag";

export const GET_STAR_SHIP = gql`
query getStartShip($id:ID) {
  starship(id:$id){
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