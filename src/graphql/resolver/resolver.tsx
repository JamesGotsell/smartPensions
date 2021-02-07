
import { ADD_RESULT, GET_RESULTS } from '../queries/getResults'
export const resolvers = {
  Mutation: {
    addResult: (_, result, { cache }) => {
      // const localData = cache.readQuery({
      //   query: GET_RESULTS
      // })
      let new_result = {
        wonBy: result.wonBy,
        gameNumber: result.gameNumber,
        __typename: result.__typename
      };
      let updatedResult = [new_result];
      console.log(updatedResult)
      cache.writeData({
        query: ADD_RESULT,
        data: {
          results: updatedResult ,
          __typename: "Result"
        },
        variables: {
          result: {
            wonBy: result.wonBy,
            gameNumber: result.gameNumber,
           __typename: result.__typename
          }
        }
      });

      return new_result;
    }
  }
};
