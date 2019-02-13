import React from 'react';
import Blurb from './blurb';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<Blurb /> component', () => {
  it('Smoke test', () => {
    shallow(<Blurb />);
  })
});