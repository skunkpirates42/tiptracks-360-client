import React from 'react';
import HeaderBar from './header-bar';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<HeaderBar /> component', () => {
  it('Smoke test', () => {
    shallow(<HeaderBar />);
  })
});