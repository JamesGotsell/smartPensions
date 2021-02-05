import React from "react"
import { mount } from 'enzyme'
import { MockedProvider } from "@apollo/client/testing";
import { GET_ALL_PEOPLE } from '../../graphql/queries/getAllPeople'

const TestComponent = () => ( <div> boom</div>)
describe(' test query', () => {
  const mocks: any  = [
    {
      request: {
        query: GET_ALL_PEOPLE
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

