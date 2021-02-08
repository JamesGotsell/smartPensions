import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_RESULTS } from '../graphql/queries/getResults'

import { AllData } from '../../src/components/types/types'


interface GameData {
  gameNumber: number;
  wonBy: string;
  winningObject: AllData;
  __typename: string
}
interface Results {
  results: GameData
}

export default (): [Results, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery(GET_RESULTS);
  return [data, error, isLoading];
};
