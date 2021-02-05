import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_All_STAR_SHIPS } from '../graphql/queries/getAllStarShips'
interface ShipData {
  allStarships: {
    edges: {
      node: {
        id: string
      }
    };
  }
}

export default (): [ShipData, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery(GET_All_STAR_SHIPS);
  return [data, error, isLoading];
};
