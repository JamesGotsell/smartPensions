import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_PERSON } from '../graphql/queries/getPerson'
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
  const { data, error, loading: isLoading } = useQuery(GET_PERSON);

  return [data, error, isLoading];
};
