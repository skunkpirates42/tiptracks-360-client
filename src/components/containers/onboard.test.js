import React from 'react';
import Onboard from './onboard';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<Onboard /> component', () => {
  it('Smoke test', () => {
    shallow(<Onboard />);
  })
});