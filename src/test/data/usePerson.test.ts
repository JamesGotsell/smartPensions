
import { MockedProvider } from '@apollo/react-testing';

import usePersonQuery from "../../data/usePersonQuery";


const mocks = [
  {
    request: {
      query: usePersonQuery
    },
    result: {
      edges: {
        node: { id: "cGVvcGxlOjE=", __typename: "Person" },
        __typename: "PeopleEdge"
      }
    },
  },
];

it('renders without error', () => {
  // renderer.create(
  //   <MockedProvider mocks={ mocks } >

  // </MockedProvider>,
  // );
});