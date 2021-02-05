import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_ALL_PEOPLE } from '../graphql/queries/getAllPeople'
interface PersonData {
  allPeople: {
    edges: {
      node: {
        id: string
      }
    };
  };
}

export default (): [PersonData, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery(GET_ALL_PEOPLE);
  return [data, error, isLoading];
};
