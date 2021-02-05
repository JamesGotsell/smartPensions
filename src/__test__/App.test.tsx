// import React from 'react';
// import {App}  from '../components/App/App';
// import { mount } from 'enzyme'

// import { MockedProvider } from '@apollo/react-testing';


// import { StarWarsTopTrumpsWrapper } from '../components/StarWarsTopTrumpsWrapper/StarWarsTopTrumpsWrapper'

// import { GET_ALL_PEOPLE } from '../../src/graphql/queries/getAllPeople'
// import { GET_All_STAR_SHIPS } from '../../src/graphql/queries/getAllStarShips'
// import { GET_PERSON } from '../../src/graphql/queries/getPerson'
// import { GET_STAR_SHIP } from '../../src/graphql/queries/getStarShip'



// describe(' test query', () => {
//   const mocks: any  = [
//     {
//       request: {
//         query: GET_ALL_PEOPLE
//       },
//       result: {
//         edges: {
//           node: { id: "cGVvcGxlOjE=", __typename: "Person" },
//           __typename: "PeopleEdge"

//         }
//       },
//     },
//     {
//       request: {
//         query: GET_All_STAR_SHIPS 
//       },
//       result: {
//         edges: {
//           node: { id: "c3RhcnNoaXBzOjI=", __typename: "Starship" },
//           __typename: "StarshipsEdge"

//         }
//       },
//     },
//     {
//       request: {
//         query: GET_PERSON,
//         variables: {
//           id: "c3RhcnNoaXBzOjk="
//         },
//       },
//       result: {
//         edges: {
//           node: { id: "cGVvcGxlOjE=", __typename: "Person" },
//           __typename: "Person"

//         }
//       },
//     },
//     {
//       request: {
//         query: GET_STAR_SHIP,
//         variables: {
//           id: "c3RhcnNoaXBzOjk="
//         },
//       },
//       result: {
//         edges: {
//           node: { id: "c3RhcnNoaXBzOjk=", __typename: "Starship"},
//           __typename: "Starship"

//         }
//       },
//     },
//   ];

//   it('renders without error', async () => {
//     const wrapper = mount(
//       <MockedProvider mocks={ mocks } >

//           <App/>

  
//       </MockedProvider>
//     );

//     await wrapper.update()
//     expect(wrapper).toMatchSnapshot();
//     expect(wrapper.find(StarWarsTopTrumpsWrapper)).toEqual(1)
//   });
// });