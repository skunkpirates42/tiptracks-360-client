import React from 'react';
import LoginPage from './login-page';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<LoginPage /> component', () => {
  it('Smoke test', () => {
    shallow(<LoginPage />);
  })
});