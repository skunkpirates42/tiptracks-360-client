import React from 'react';
import DashControls from './dash-controls';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<DashControls /> component', () => {
  it('Smoke test', () => {
    shallow(<DashControls />);
  })
});