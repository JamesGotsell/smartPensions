import React from "react"
import { mount } from 'enzyme'
import { MockedProvider } from "@apollo/client/testing";

import { GET_STAR_SHIP} from "../../graphql/queries/getStarShip"

const TestComponent = () => ( <div> boom</div>)
describe(' test query', () => {
  const mocks: any  = [{
    request: {
      query: GET_STAR_SHIP,
      variables: {
        id: "c3RhcnNoaXBzOjk="
      },
    },
    result: {
      edges: {
        node: { id: "cGVvcGxlOjE=", __typename: "StarShip" },
        __typename: "Person"

      }
    }
  },
  ];
  it('renders without error', async () => {

    const wrapper = mount(
      <MockedProvider mocks={ mocks }><TestComponent/></MockedProvider>
    );

    await wrapper.update()
    expect(wrapper)
  });
});

