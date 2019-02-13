import React from 'react';
import LoginFrom from './login-form';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<LoginFrom /> component', () => {
  it('Smoke test', () => {
    shallow(<LoginFrom />);
  })
});