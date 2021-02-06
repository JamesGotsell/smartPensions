import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";

import { GET_PERSON } from '../graphql/queries/getPerson'



interface Person {
  name: string
  height: number,
  birthYear: string,
  gender: string
}

interface Charactors {
  firstSelection?: Person
  secondSelection?: Person
}


export default (id: string, id2: string): [Charactors, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery(GET_PERSON, {
    variables: {
      id: id,
      id2: id2
    },
    skip: (id == "" || id2 == "")
  });
  return [data, error, isLoading];
};