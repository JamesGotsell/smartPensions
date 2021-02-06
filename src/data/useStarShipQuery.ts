import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_STAR_SHIP } from '../graphql/queries/getStarShip'


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
export default (id: string, id2: string): [StarShipData, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery(GET_STAR_SHIP, {
    variables: {
      id: id,
      id2: id2
    },
    skip: (id == "" || id2 == "")
  });
  return [data, error, isLoading];
};
