import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_RESULTS } from '../graphql/queries/getResults'

interface GameData {
  gameNumber: number;
  wonBy: string; // either computer or  player one
  __typename: string
}
interface Results {
  results: GameData[]
}

export default (): [Results, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery(GET_RESULTS);
  return [data, error, isLoading];
};
