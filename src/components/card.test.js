import React from 'react';
import Card from './card';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<Card /> component', () => {
  it('Smoke test', () => {
    shallow(<Card />);
  })
});