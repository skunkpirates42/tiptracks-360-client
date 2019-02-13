import React from 'react';
import LandingPage from './landing-page';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<LandingPage /> component', () => {
  it('Smoke test', () => {
    shallow(<LandingPage />);
  })
});