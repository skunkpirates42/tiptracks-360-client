import React from 'react';
import BackArrow from './back-arrow';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<BackArrow /> component', () => {
  it('Smoke test', () => {
    shallow(<BackArrow />);
  })
});