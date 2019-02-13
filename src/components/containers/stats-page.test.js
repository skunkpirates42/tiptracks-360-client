import React from 'react';
import StatsPage from './stats-page';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<StatsPage /> component', () => {
  it('Smoke test', () => {
    shallow(<StatsPage />);
  })
});