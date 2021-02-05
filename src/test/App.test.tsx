import React from 'react';
import {  shallow } from 'enzyme';
import {App}  from '../components/App/App';
import { StarWarsTopTrumpsWrapper } from '../components/StarWarsTopTrumpsWrapper/StarWarsTopTrumpsWrapper'
//  need to mock 
test('renders the component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(StarWarsTopTrumpsWrapper)).toEqual(1)
});