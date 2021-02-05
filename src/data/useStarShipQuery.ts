import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_STAR_SHIP } from '../graphql/queries/getStarShip'

/*
{
  "data": {
    "starship": {
      "id": "c3RhcnNoaXBzOjk=",
      "model": "DS-1 Orbital Battle Station",
      "passengers": "843,342",
      "costInCredits": 1000000000000,
      "starshipClass": "Deep Space Mobile Battlestation",
      "maxAtmospheringSpeed": null,
      "hyperdriveRating": 4
    }
  }
}
*/

interface StarShipData {
  starship: {
    id: number,
    model: string,
    passengers: string,
    costInCredits: number,
    starshipClass: string,
    maxAtmospheringSpeed: number,
    hyperdriveRating: number
  }
}
export default (id: string): [StarShipData, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery(GET_STAR_SHIP, {
    variables: {
      id: id
    }
  });
  return [data, error, isLoading];
};
