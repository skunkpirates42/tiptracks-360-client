import React from 'react';
import Controls from './controls';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<Controls /> component', () => {
  it('Smoke test', () => {
    shallow(<Controls />);
  })
});