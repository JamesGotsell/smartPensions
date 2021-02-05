import React from "react"
import { mount } from 'enzyme'
import { MockedProvider } from "@apollo/client/testing";
import { GET_All_STAR_SHIPS } from '../../graphql/queries/getAllStarShips'

const TestComponent = () => ( <div> boom</div>)
describe(' test query', () => {
  const mocks: any  = [
    {
      request: {
        query: GET_All_STAR_SHIPS
      },
      result: {
        edges: {
          node: { id: "cGVvcGxlOjE=", __typename: "Person" },
          __typename: "Person"

        }
      },
    },
  ];
  it('renders without error', async () => {

    const wrapper = mount(
      <MockedProvider mocks={ mocks }><TestComponent/></MockedProvider>
    );

    await wrapper.update()
    expect(wrapper).toEqual
  });
});

